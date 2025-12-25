# 🧪 Cypress Automation Testing - OrangeHRM Demo

Final proyek ini merupakan implementasi **Automation Testing menggunakan Cypress** untuk menguji fitur **Login** , **Forgot Password**, dan **Directory** pada situs demo [OrangeHRM](https://opensource-demo.orangehrmlive.com).

---

## 📁 Struktur Folder Proyek

cypress/  
├── data/  
│   ├── LoginData.js  
│   └── DirectoryData.js  
│  
├── pages/  
│   ├── LoginPage.js  
│   └── DirectoryPage.js  
│  
├── e2e/  
│   ├── Login/  
│   │   └── Login.cy.js  
│   └── Directory/  
│       └── Directory.cy.js  
│  
├── support/  
│   ├── commands.js  
│   └── e2e.js  
│  
└── cypress.config.js

---

## 🧩 Fitur yang Diuji

### 🔐 **Login Module**
**File:** `Login.cy.js`

**Test Cases:**
- ✅ **TC01** - Login berhasil dengan kredensial valid  
- ❌ **TC02** - Login gagal (username tidak valid)  
- ❌ **TC03** - Login gagal (password tidak valid)  
- ❌ **TC04** - Login gagal (username kosong)  
- ❌ **TC05** - Login gagal (password kosong)  
- ❌ **TC06** - Login gagal (username & password kosong)  
- ❌ **TC07** - Login gagal (huruf besar semua)  

---

### 📂 **Directory Module**
**File:** `Directory.cy.js`

**Test Cases:**
- ✅ **TC01** - Cari karyawan berdasarkan nama valid  
- ❌ **TC02** - Cari karyawan berdasarkan nama tidak valid  
- ✅ **TC03** - Filter berdasarkan Job Title  
- ✅ **TC04** - Filter berdasarkan Location  
- ✅ **TC05** - Kombinasi filter (Job Title + Location)

---

### 📂 **Forgot Password Module**
**File:** `ForgotPass.cy.js`

**Test Cases:**
- ✅ **TC01** - Berhasil reset password  
- ❌ **TC02** - Gagal reset password (username tidak valid)
- ✅ **TC03** - Gagal reset password (username kosong)
- ✅ **TC04** - Gagal reset password (username uppercase)

---

## ⚙️ Cara Menjalankan


```bash
npm install
npx cypress open
```

---

## 🧩 Presentasi
https://youtu.be/2qYM1ztOPHY?si=SPJgUV7eAmNELQZd
