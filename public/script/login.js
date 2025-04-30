document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const loginButton = document.querySelector("#loginForm button");
    loginButton.disabled = true;

    try {
        console.log("Tentando fazer login com os dados:", email, password); // Log dos dados inseridos
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_user: email, password_user: password }),
        });

        if (!response.ok) throw new Error("Usuário ou senha inválidos.");

        const result = await response.json();
        console.log("Resposta do servidor:", result); // Log da resposta do servidor

        if (response.ok && result) {
            window.location.replace("/dashboard");
        } else {
            throw new Error(result.message || "Erro ao autenticar.");
        }
    } catch (err) {
        console.error("Erro:", err);
        alert(err.message);
    } finally {
        loginButton.disabled = false;
    }
});

// 🔹 Modo escuro com persistência
document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;

    // Carregar o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    console.log("Tema carregado do localStorage:", savedTheme); // Log do tema carregado

    if (savedTheme === "dark") {
        html.classList.add("dark");
        console.log("Modo escuro ativado");
    } else if (savedTheme === "light") {
        html.classList.remove("dark");
        console.log("Modo claro ativado");
    }

    const toggle = document.getElementById("dark-toggle");

    // Verifica se o botão existe antes de adicionar o evento
    if (toggle) {
        console.log("Botão de alternância encontrado");
        toggle.addEventListener("click", () => {
            console.log("Botão de alternância clicado");

            // Alterna a classe 'dark' no <html>
            html.classList.toggle("dark");

            // Atualiza o tema salvo no localStorage
            if (html.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                console.log("Tema escuro ativado e salvo");
            } else {
                localStorage.setItem("theme", "light");
                console.log("Tema claro ativado e salvo");
            }
        });
    } else {
        console.log("Botão de alternância não encontrado");
    }

    console.log("login.js carregado com sucesso!");  // **Passo 5: Confirmação do carregamento do arquivo**
});
