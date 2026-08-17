const API_URL = "http://localhost:3000/produtos";

const form = document.getElementById("productForm");
const formPanel = document.getElementById("formPanel");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const productsBody = document.getElementById("productsBody");
const toast = document.getElementById("toast");
const apiStatus = document.getElementById("apiStatus");

let products = [];

function showToast(message, type = "success") {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.className = "toast", 3000);
}

function formatCurrency(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function getId(product) {
    return product.id ?? product.id_produto;
}

function getQuantity(product) {
    return product.quantidade ?? product.estoque ?? 0;
}

function setApiStatus(online) {
    apiStatus.className = `api-status ${online ? "online" : "offline"}`;
    apiStatus.querySelector("span:last-child").textContent = online ? "API conectada" : "API indisponível";
}

function updateStats() {
    document.getElementById("totalProducts").textContent = products.length;
    document.getElementById("activeProducts").textContent = products.filter(p => String(p.status || "").toLowerCase() === "ativo").length;
    document.getElementById("totalStock").textContent = products.reduce((sum, p) => sum + Number(getQuantity(p) || 0), 0);
}

function renderProducts() {
    updateStats();

    if (!products.length) {
        productsBody.innerHTML = `<tr><td colspan="7" class="empty">Nenhum produto cadastrado.</td></tr>`;
        return;
    }

    productsBody.innerHTML = products.map(product => {
        const id = getId(product);
        const status = product.status || "ativo";
        return `
            <tr>
                <td>#${id}</td>
                <td class="product-name">${escapeHtml(product.nome)}</td>
                <td>${escapeHtml(product.categoria ?? product.id_categoria ?? "-")}</td>
                <td>${formatCurrency(product.preco)}</td>
                <td>${getQuantity(product)}</td>
                <td><span class="badge ${String(status).toLowerCase() === "inativo" ? "inativo" : ""}">${escapeHtml(status)}</span></td>
                <td>
                    <div class="actions">
                        <button class="action-btn edit-btn" onclick="editProduct(${id})">Editar</button>
                        <button class="action-btn delete-btn" onclick="deleteProduct(${id})">Excluir</button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

async function loadProducts() {
    productsBody.innerHTML = `<tr><td colspan="7" class="loading">Carregando produtos...</td></tr>`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Não foi possível consultar a API.");
        products = await response.json();
        setApiStatus(true);
        renderProducts();
    } catch (error) {
        setApiStatus(false);
        productsBody.innerHTML = `<tr><td colspan="7" class="empty">Não foi possível carregar os produtos. Verifique se o servidor está rodando.</td></tr>`;
        showToast(error.message, "error");
    }
}

function getFormData() {
    return {
        nome: document.getElementById("nome").value.trim(),
        categoria: document.getElementById("categoria").value.trim(),
        preco: Number(document.getElementById("preco").value),
        quantidade: Number(document.getElementById("quantidade").value),
        status: document.getElementById("status").value
    };
}

function resetForm() {
    form.reset();
    document.getElementById("productId").value = "";
    formTitle.textContent = "Cadastrar produto";
    submitBtn.textContent = "Cadastrar produto";
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("productId").value;
    const data = getFormData();

    if (!data.nome || !data.categoria || Number.isNaN(data.preco) || Number.isNaN(data.quantidade)) {
        showToast("Preencha todos os campos obrigatórios.", "error");
        return;
    }

    const method = id ? "PUT" : "POST";
    const url = id ? `${API_URL}/${id}` : API_URL;

    submitBtn.disabled = true;
    submitBtn.textContent = id ? "Salvando..." : "Cadastrando...";

    try {
        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.mensagem || result.message || "Erro ao salvar produto.");

        showToast(id ? "Produto atualizado com sucesso!" : "Produto cadastrado com sucesso!");
        resetForm();
        await loadProducts();
    } catch (error) {
        showToast(error.message, "error");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = document.getElementById("productId").value ? "Salvar alterações" : "Cadastrar produto";
    }
});

window.editProduct = async function (id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const product = await response.json();
        if (!response.ok) throw new Error(product.mensagem || "Produto não encontrado.");

        document.getElementById("productId").value = id;
        document.getElementById("nome").value = product.nome ?? "";
        document.getElementById("categoria").value = product.categoria ?? "";
        document.getElementById("preco").value = product.preco ?? "";
        document.getElementById("quantidade").value = product.quantidade ?? product.estoque ?? "";
        document.getElementById("status").value = product.status ?? "ativo";

        formTitle.textContent = `Editar produto #${id}`;
        submitBtn.textContent = "Salvar alterações";
        formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
        showToast(error.message, "error");
    }
};

window.deleteProduct = async function (id) {
    if (!confirm(`Deseja realmente excluir o produto #${id}?`)) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.mensagem || "Erro ao excluir produto.");

        showToast("Produto excluído com sucesso!");
        await loadProducts();
    } catch (error) {
        showToast(error.message, "error");
    }
};

document.getElementById("newProductBtn").addEventListener("click", () => {
    resetForm();
    formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("nome").focus();
});

document.getElementById("cancelBtn").addEventListener("click", resetForm);
document.getElementById("clearBtn").addEventListener("click", resetForm);
document.getElementById("refreshBtn").addEventListener("click", loadProducts);

loadProducts();
