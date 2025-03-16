const url = "https://my-json-server.typicode.com/Zevis-ai/api/users"
const body = document.body;

const init =()=>{
    // קריאה ל-Promise עם `then`
getPosts
.then(data => {
    console.log("✅ הצלחה:", data);
    // בונים את התוכן בצורה מסודרת
    const user = data[0]; // מאחר וה-API מחזיר מערך, לוקחים את האובייקט הראשון
    body.innerHTML = `
                <div class="container">
                    <h2>My details: 📌</h2>
                    <div class="card">
                        <p><strong>Name:</strong> ${user.name} ${user.lastName}</p>
                        <p><strong>Age:</strong> ${user.age}</p>
                        <p><strong>✉️ Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
                        <p><strong>📞 Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a></p>
                    </div>
                </div>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .container {
                        text-align: center;
                    }
                    .card {
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        max-width: 300px;
                        margin: auto;
                    }
                    .card p {
                        margin: 10px 0;
                    }
                    a {
                        text-decoration: none;
                        color: #007bff;
                        font-weight: bold;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                </style>
            `;
        })
    
.catch(error => {
    console.error("❌ שגיאה:", error);
    body.innerHTML = `<p style="color: red;">שגיאה: ${error}</p>`;
});
}

// פונקציה שמביאה נתונים מה-API
const getPosts = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); // שולח בקשה GET ל-API
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText)); // ממיר את התשובה ל-JSON ושולח ל-resolve
        } else {
            reject("Error: " + xhr.status); // אם יש שגיאה, שולח ל-reject
        }
    };

    xhr.onerror = function () {
        reject("Network Error"); // אם הבקשה נכשלה מסיבה כלשהי
    };

    xhr.send(); // שולח את הבקשה
});


init();
