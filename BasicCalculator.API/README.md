# 🧮 BasicCalculator.API

A simple .NET-based RESTful API providing authentication, secure endpoints, math expression evaluation, unit conversions, and user-specific calculation history.

## 📦 Features

- ✅ **JWT Authentication (Register/Login)**
- 🔒 **Secured Endpoints**
- 🧠 **Expression Evaluation**
- 📜 **User Calculation History**
- 🔁 **Unit Conversion** (Length, Weight, Temperature)

---

## 🚀 Getting Started

### ⚙️ Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Entity Framework Core Tools](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)
- (Optional) [PostgreSQL / SQL Server / SQLite] depending on your setup

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/BasicCalculator.API.git
   cd BasicCalculator.API
 2. **Install dependencies**
Ensure you have [.NET SDK 8+](https://dotnet.microsoft.com/download) installed.

 3. **Update DB Connection (Optional)**
Edit the connection string in `appsettings.json`:
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\MSSQLLocalDB;Database=CalculatorDb;Trusted_Connection=True;"
}
```

 4. **Apply migrations and update the database**
```bash
dotnet ef database update
```

 5. **Run the application**
```bash
dotnet run
```

Navigate to: [https://localhost:5296/swagger/](https://localhost:5296/swagger/)

---

## 📦 API Endpoints

### 🔐 Auth

- `POST /api/Auth/register` – Register new user  
- `POST /api/Auth/login` – Get JWT token  
- `GET /api/Auth/secured-data` – Sample protected route  

### 🧮 Calculation

- `POST /evaluate` – Submit math expression (auth required)  
- `GET /history` – View user's calculation history (auth required)  

### 🔁 Unit Conversion

- `GET /api/Units/length?value=1&fromUnit=meter&toUnit=kilometer`  
- `GET /api/Units/weight`  
- `GET /api/Units/temperature`

---

## 📦 Request/Response Examples

### ✅ Register
```json
POST /api/Auth/register
{
  "email": "user@example.com",
  "password": "P@ssw0rd!"
}
```

### ✅ Login
```json
POST /api/Auth/login
{
  "email": "user@example.com",
  "password": "P@ssw0rd!"
}
```

### 🔐 Add token to Swagger
Click **Authorize** in Swagger and enter:
```
Bearer {your_token}
```

---

## 🧾 Swagger Documentation

This project is documented using Swagger/OpenAPI. To access it, navigate to:

```
https://localhost:5001/swagger
```

---

## ⚙️ Dependencies

- Microsoft.AspNetCore.Authentication.JwtBearer  
- Microsoft.EntityFrameworkCore.SqlServer  
- Microsoft.EntityFrameworkCore.Tools  
- Swashbuckle.AspNetCore  

Install manually using:

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Swashbuckle.AspNetCore
```

---

## 📂 Project Structure

```
BasicCalculator.API/
│
├── Controllers/
│   ├── AuthController.cs
│   ├── CalculationController.cs
│   └── UnitsController.cs
│
├── Models/
│   ├── ApplicationUser.cs
│   └── CalculationHistory.cs
│
├── DTOs/
│   ├── RegisterDto.cs
│   └── LoginDto.cs
│
├── Services/
├── Program.cs
└── appsettings.json
```

---

## 🔒 Security Note

The app uses JWT Bearer tokens for authentication. Keep your secret key (`JwtSettings:Secret`) safe in production environments.

---

## ✍️ Author

- **Hassen** – [@hassen396](https://github.com/hassen396)

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).