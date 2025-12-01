# Full Stack Portfolio Website Template

A modern, professional full-stack portfolio website template built with **React (Vite)** frontend and **Node.js/Express** backend. Perfect for developers, designers, and creative professionals to showcase their work.

## ✨ Features

- ✅ Responsive modern design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Dark mode with premium glassmorphism UI
- ✅ GitHub Insights integration with live stats
- ✅ Contact form with email notifications
- ✅ Tech stack visualization with charts
- ✅ Timeline/Journey section for experience
- ✅ Projects showcase with modal previews
- ✅ SEO optimized
- ✅ Production-ready deployment setup

## 📁 Project Structure

```
portfolio-website/
├── frontend/                    # React Vite application
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── TechStackGraph.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SoftSkillsAndFunFactsSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── AnimatedBackground.jsx
│   │   │   └── ...
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── useGithubStats.js
│   │   ├── pages/               # Page components
│   │   ├── Assets/              # Images and media files
│   │   ├── App.jsx              # Main app with routing
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # React entry point
│   ├── public/                  # Static files
│   ├── index.html               # HTML template
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind CSS config
│   ├── .env                     # Environment variables
│   └── package.json             # Frontend dependencies
│
├── backend/                     # Express.js server
│   ├── src/
│   │   ├── config/              # Configuration files
│   │   ├── controllers/         # Route handlers
│   │   ├── middleware/          # Express middleware (CORS, error handling)
│   │   ├── routes/              # API routes
│   │   ├── utils/               # Utility functions (email, validators)
│   │   └── server.js            # Main server file
│   ├── .env.example             # Example environment variables
│   ├── .env                     # Environment variables
│   ├── package.json             # Backend dependencies
│   └── vercel.json              # Vercel deployment config
│
├── deploy.sh                    # Deployment script
├── vercel.json                  # Root vercel config
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ and npm v6+
- **Git**
- A code editor (VS Code recommended)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio-website
```

### 2. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

## 🎨 Frontend Setup

### Environment Variables

Create `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000
VITE_MY_USERNAME=your_github_username
```

### Running Development Server

```bash
cd frontend
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production

```bash
cd frontend
npm run build
```

Output: `frontend/dist/`

### Key Technologies

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Recharts** - Data visualization
- **GitHub REST API** - Live GitHub stats

## 🔧 Backend Setup

### Environment Variables

Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Email Configuration (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@example.com
```

### Gmail Setup for Email

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Step Verification**
3. Generate [App Password](https://myaccount.google.com/apppasswords)
4. Use app password in `SMTP_PASS`

### Running Development Server

```bash
cd backend
npm run dev
```
Server runs on `http://localhost:5000`

### API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/api/health` | Health check | - |
| `POST` | `/api/contact` | Submit contact form | `{ name, email, message }` |

## 🎯 Customization Guide

### 1. Update Personal Information

**Navbar & Logo:**
- Edit `frontend/src/components/Navbar.jsx`
- Update name, resume link, and navigation

**Hero Section:**
- Edit `frontend/src/components/HeroSection.jsx`
- Change your title, tagline, and add your image

**About Section:**
- Edit `frontend/src/components/AboutSection.jsx`
- Write your bio and background

**Contact Info:**
- Edit `frontend/src/components/ContactSection.jsx`
- Update email, phone, and social links

### 2. Update Projects

Edit `frontend/src/components/ProjectsSection.jsx`:
```javascript
const PROJECTS = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: projectImage,
    github: 'https://github.com/yourname/project',
    live: 'https://project-live.com',
    features: ['Feature 1', 'Feature 2']
  },
  // Add more projects
]
```

### 3. Update Skills

Edit `frontend/src/components/SkillsSection.jsx`:
```javascript
const SKILLS = {
  'Frontend': ['React', 'Tailwind CSS', 'JavaScript', ...],
  'Backend': ['Node.js', 'Express', 'MongoDB', ...],
  'Tools': ['Git', 'VS Code', 'Figma', ...],
}
```

### 4. Update Experience/Journey

Edit `frontend/src/components/JourneySection.jsx`:
```javascript
const JOURNEY_ITEMS = [
  {
    title: 'Job Title',
    organization: 'Company Name',
    period: '2023 - Present',
    description: 'What you did...',
    icon: '💼'
  },
  // Add more items
]
```

### 5. Update Tech Stack

Edit `frontend/src/components/TechStackGraph.jsx`:
- Modify data structure to show your preferred technologies
- Colors are auto-assigned by category (Frontend/Backend/Database)

### 6. Update Soft Skills & Fun Facts

Edit `frontend/src/components/SoftSkillsAndFunFactsSection.jsx`:
```javascript
const softSkills = [
  { icon: '💬', skill: 'Communication' },
  // Add your soft skills
]

const funFacts = [
  { icon: '🎤', fact: 'Fun fact about yourself' },
  // Add fun facts
]
```

### 7. Add Your GitHub Username

Update `frontend/.env`:
```env
VITE_MY_USERNAME=your_actual_github_username
```

This enables live GitHub stats on the GitHub Insights page.

## 🌐 Running Both Frontend & Backend

### Option 1: Two Terminal Windows

**Terminal 1:**
```bash
cd frontend && npm run dev
```

**Terminal 2:**
```bash
cd backend && npm run dev
```

### Option 2: Using Concurrently

Install globally:
```bash
npm install -g concurrently
```

From root directory:
```bash
concurrently "cd frontend && npm run dev" "cd backend && npm run dev"
```

## 📤 Deployment

### Frontend - Vercel (Recommended)

1. **Create account** at [vercel.com](https://vercel.com)
2. **Import project** from GitHub
3. **Configure:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Environment Variables:**
   ```
   VITE_API_URL=your_backend_url
   VITE_MY_USERNAME=your_github_username
   ```
5. **Deploy** - Auto-deploys on push to main

### Backend - Render.com

1. **Create account** at [render.com](https://render.com)
2. **New > Web Service**
3. **Connect GitHub Repository**
4. **Configure:**
   - Build: `npm install`
   - Start: `npm start`
5. **Environment Variables:** Add all from `.env`
6. **Create Service**

### Backend - Railway.app

1. **Go to** [railway.app](https://railway.app)
2. **New Project > Deploy from GitHub**
3. **Add Variables** from `.env`
4. **Auto-deploys** from main branch

### Update Frontend After Backend Deploy

After deploying backend, update `frontend/.env`:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

Push to redeploy frontend with new URL.

## 🎨 Styling & Customization

### Color Scheme

Edit `frontend/src/index.css` for global colors:
- Primary: `#0dd8ff` (Cyan)
- Secondary: `#1e78b4` (Blue)
- Background: `#0a0a0f` (Very Dark Blue)

### Tailwind Colors

All components use Tailwind CSS (`frontend/tailwind.config.js`):
- Modify theme colors for site-wide changes
- Use Tailwind utilities in JSX (e.g., `text-cyan-300`)

### Animations

- **Framer Motion** handles component animations
- **CSS keyframes** in AnimatedBackground
- Edit animation timings in component files

## 🔐 Security

- Never commit `.env` files (use `.env.example`)
- Validate all inputs on backend
- Use HTTPS in production
- Implement rate limiting on API endpoints
- Sanitize email inputs before sending

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run build  # Test production build
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
npm run dev  # Development with auto-reload
npm start  # Production mode
```

## 📋 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add projects with descriptions and links
- [ ] Set GitHub username for GitHub Insights
- [ ] Configure email (SMTP settings)
- [ ] Test contact form locally
- [ ] Test mobile responsiveness
- [ ] Build frontend: `npm run build`
- [ ] Deploy backend (Render/Railway)
- [ ] Deploy frontend (Vercel)
- [ ] Test live contact form
- [ ] Set up custom domain (optional)

## 🐛 Troubleshooting

### Frontend won't load
- Check browser console for errors
- Verify `VITE_API_URL` is correct
- Clear browser cache

### Backend API not responding
- Verify backend is running: `http://localhost:5000/api/health`
- Check CORS settings in `backend/src/middleware/corsMiddleware.js`
- Verify `FRONTEND_URL` in backend `.env`

### Contact form not sending
- Check SMTP credentials in backend `.env`
- Verify Gmail app password is correct
- Check backend console for errors
- Ensure `ADMIN_EMAIL` is set

### GitHub Insights not loading
- Verify `VITE_MY_USERNAME` in frontend `.env`
- Check GitHub API rate limits (60 requests/hour for unauthenticated)
- Username is case-sensitive

### Port conflicts
```bash
# Check what's using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

## 🚀 Performance Tips

- Use lazy loading for images
- Optimize image sizes (use tools like TinyPNG)
- Enable gzip compression in backend
- Use CDN for static assets
- Minimize bundle size: `npm run build --report`

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Express.js](https://expressjs.com)
- [React Router](https://reactrouter.com)
- [Nodemailer](https://nodemailer.com)

## 📝 License

MIT License - Feel free to use this template for your portfolio!

## 🤝 Contributing

To improve this template:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📧 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review the GitHub issues
3. Create a new issue with details

---

**Built with ❤️ - Start building your portfolio today! 🚀**
