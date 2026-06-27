<img width="1900" height="860" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/ac696197-1b50-4d7a-a681-84505805317e" />

# 🎫 TicketBari

<div align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/HeroUI-3.2.1-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/MongoDB-7.3-green?style=for-the-badge&logo=mongodb" />
<img src="https://img.shields.io/badge/Better%20Auth-Authentication-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Stripe-Payment-635BFF?style=for-the-badge&logo=stripe" />

<h1>🎫 TicketBari</h1>

### A Modern Multi-Role Online Ticket Booking Platform

Book **Bus**, **Train**, **Launch**, and **Flight** tickets through a fast, secure, and user-friendly booking experience.

</div>

---

# 🌐 Live Demo

### 🚀 Live Website

https://ticketbari-sepia.vercel.app/

### ⚙️ Backend API

https://ticketbari-server-nu.vercel.app/

---

# 📖 About

TicketBari is a modern online ticket booking platform built with **Next.js**, **HeroUI**, **MongoDB**, **Better Auth**, and **Stripe**.

The platform supports **three different user roles**:

- 👤 User
- 🚌 Vendor
- 👑 Admin

Each role has its own dashboard and permissions, creating a secure and scalable booking system.

---

# ✨ Key Features

## 🔐 Authentication

- Better Auth Authentication
- Secure Login & Registration
- Protected Routes
- Session Management
- Role-Based Authorization

---

## 🎫 Ticket Booking

- Browse Available Tickets
- Ticket Details Page
- Live Departure Countdown
- Seat Quantity Selector
- Booking Confirmation
- Stripe Payment Integration

---

## 🔍 Smart Search & Filter

- Search by Departure Location
- Search by Destination
- Partial Search Matching
- Filter by Transport Type
- Sort by Price (Low → High)
- Sort by Price (High → Low)

---

## 🚍 Supported Transport

- 🚌 Bus
- 🚆 Train
- 🚢 Launch
- ✈️ Flight

---

## 🎨 User Experience

- Fully Responsive Design
- Dark / Light Theme
- Beautiful Dashboard
- Modern UI
- Loading States
- Toast Notifications
- Custom 404 Page
- Interactive FAQ
- Live Search Experience

---

# 👥 Dashboard

TicketBari provides dedicated dashboards for each user role.

---

## 👤 User Dashboard

Users can book tickets and manage their personal activities.

### Features

- 📖 My Bookings
- 💳 Transactions
- 👤 Profile Management

---

## 🚌 Vendor Dashboard

Vendors can manage tickets and monitor their business.

### Features

- ➕ Add Ticket
- 🎫 My Added Tickets
- 📥 Requested Booking Tickets
- 💰 Revenue Overview
- 👤 Vendor Profile

---

## 👑 Admin Dashboard

Administrators have full control over the platform.

### Features

- 👤 Admin Profile
- 👥 Manage Users
- 🎫 Manage Tickets
- 📢 Advertise Tickets

---

# 🔐 Role-Based Permissions

| Feature | User | Vendor | Admin |
|----------|:----:|:------:|:-----:|
| Browse Tickets | ✅ | ✅ | ✅ |
| Book Tickets | ✅ | ❌ | ❌ |
| View My Bookings | ✅ | ❌ | ❌ |
| Transactions | ✅ | ❌ | ❌ |
| Add Ticket | ❌ | ✅ | ❌ |
| Update Own Tickets | ❌ | ✅ | ❌ |
| Delete Own Tickets | ❌ | ✅ | ❌ |
| Requested Booking Tickets | ❌ | ✅ | ❌ |
| Revenue Overview | ❌ | ✅ | ❌ |
| Manage Users | ❌ | ❌ | ✅ |
| Manage Tickets | ❌ | ❌ | ✅ |
| Advertise Tickets | ❌ | ❌ | ✅ |

---

# 💳 Stripe Payment

Secure online payment powered by Stripe.

### Workflow

Browse Tickets

⬇️

View Ticket Details

⬇️

Choose Quantity

⬇️

Stripe Checkout

⬇️

Booking Confirmed

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- HeroUI 3.2.1
- Tailwind CSS
- Lucide React
- React Icons
- Swiper
- Recharts
- Next Themes

---

## Backend

- Next.js API Routes
- MongoDB
- Better Auth
- Mongo Adapter

---

## Payment

- Stripe
- Stripe JS

---

# 📦 NPM Packages

- @heroui/react
- better-auth
- mongodb
- stripe
- @stripe/stripe-js
- swiper
- recharts
- react-icons
- lucide-react
- react-toastify
- next-themes

---

# 📂 Folder Structure

```
src
│
├── app
│
├── components
│
├── lib
│
└── providers<img width="1900" height="860" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/66cf5852-0221-4d4f-9db7-a0865bed7e0f" />

```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/shakil218/ticketbari.git
```

Go inside the project

```bash
cd ticketbari
```

Install packages

```bash
npm install
```

Create

```
.env.local
```

Add environment variables

```env
NEXT_PUBLIC_API_URL=

MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

STRIPE_SECRET_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 📱 Responsive Design

Optimized for

- 📱 Mobile
- 📟 Tablet
- 💻 Laptop
- 🖥 Desktop

---

# 📈 Future Improvements

- QR Code Tickets
- PDF Ticket Download
- Email Notifications
- Coupon System
- Wallet Payment
- Live Seat Selection
- Reviews & Ratings
- Multi-language Support
- Real-time Booking Updates

---

# 🤝 Contributing

Contributions are welcome!

### Fork Repository

```bash
git fork
```

### Create New Branch

```bash
git checkout -b feature-name
```

### Commit

```bash
git commit -m "Add new feature"
```

### Push

```bash
git push origin feature-name
```

### Create Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Developer

## Rabiul Hasan Shakil

### GitHub

https://github.com/shakil218

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

Your support motivates future improvements and helps others discover the project.

---

<div align="center">

### ❤️ Built with Next.js, HeroUI, MongoDB, Better Auth & Stripe

**Thank you for visiting TicketBari!**

</div>
