#  Purnavijaya— Personal Portfolio

Full-stack portfolio website built with **Node.js + Express + MongoDB**, deployed on **Vercel**.

## Tech Stack
| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | HTML, CSS, JavaScript             |
| Backend  | Node.js + Express.js              |
| Database | MongoDB (via Mongoose)            |
| Deploy   | Vercel                            |

## Project Structure
```
portfolio/
├── server.js           # Express server entry point
├── package.json
├── vercel.json         # Vercel deployment config
├── .env.example        # Environment variables template
├── models/
│   ├── Project.js      # MongoDB schema for projects
│   └── Message.js      # MongoDB schema for contact messages
├── routes/
│   ├── projects.js     # GET/POST/DELETE /api/projects
│   └── messages.js     # POST/GET /api/messages
└── public/
    └── index.html      # Frontend (served by Express)
```

## API Endpoints
| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | /api/projects     | Fetch all projects       |
| POST   | /api/projects     | Add a new project        |
| DELETE | /api/projects/:id | Delete a project         |
| POST   | /api/messages     | Save contact message     |
| GET    | /api/messages     | View all messages        |

## Local Setup
```bash
# 1. Install dependencies
npm install

# 2. Create .env from template
cp .env.example .env
# Edit .env and add your MongoDB Atlas URI

# 3. Run development server
npm run dev
# → http://localhost:5000
```

## Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod

# Add environment variable in Vercel dashboard:
# MONGO_URI = mongodb+srv://...
```

## Deploy to Heroku
```bash
heroku create purnavijaya-portfolio
heroku config:set MONGO_URI=mongodb+srv://...
git push heroku main
```
