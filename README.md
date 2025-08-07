# IPC Justice Aid 🏛️⚖️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white)](https://djangoproject.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white)](https://flutter.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://docker.com/)
[![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=flat&logo=google&logoColor=white)](https://developers.google.com/identity)

> **Democratizing access to justice through AI-powered legal assistance**

A comprehensive legal-tech platform that bridges the gap between citizens in legal distress and legal professionals. IPC Justice Aid provides free AI-powered legal analysis under the Indian Penal Code while creating efficient lead generation for lawyers.

## 🌟 Features

### For Citizens (Free Platform)
- 🤖 **AI-Powered Legal Analysis** - Analyze incidents under Indian Penal Code
- 📄 **Structured Case Reports** - Generate professional legal summaries
- 🔒 **Anonymous Consultation** - Privacy-focused legal guidance
- 📧 **Direct Lawyer Connect** - Connect with pre-vetted legal professionals
- 📱 **Cross-Platform Access** - Web and mobile applications

### For Legal Professionals (Subscription Dashboard)
- 🎯 **Pre-Screened Leads** - Quality-filtered case opportunities
- 🗂️ **Advanced Filtering** - Filter by IPC sections, location, keywords
- 📊 **Lead Management** - Track and manage client interactions
- 💼 **Multi-Tier Subscriptions** - Flexible pricing for different practice sizes
- 🏥 **Pro-Bono Support** - Free tier for legal aid organizations

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js Web   │    │  Flutter Mobile │    │  Django Backend │
│    Frontend     │◄──►│   Application   │◄──►│   + REST API    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Docker        │
                    │   Container     │
                    └─────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) **Next.js** - Modern React framework for web application
- ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white) **Flutter** - Cross-platform mobile application
- ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React** - Component-based UI library
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript** - Type-safe development
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Utility-first styling

### Backend
- ![Django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white) **Django** - Python web framework
- ![Django REST](https://img.shields.io/badge/Django_REST-ff1709?style=flat&logo=django&logoColor=white) **Django REST Framework** - API development
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) **PostgreSQL** - Primary database
- ![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white) **Redis** - Caching and session management

### AI & Integration
- ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white) **OpenAI GPT-4** - Legal analysis AI
- ![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=flat&logo=google&logoColor=white) **Google OAuth** - Authentication system

### DevOps & Deployment
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker** - Containerization
- ![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat&logo=docker&logoColor=white) **Docker Compose** - Multi-container orchestration
- ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) **GitHub Actions** - CI/CD pipeline
- ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white) **AWS** - Cloud deployment

## 🚀 Quick Start

### Prerequisites
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) Docker & Docker Compose
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) Node.js 18+
- ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) Python 3.11+
- ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white) Flutter SDK

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ipc-justice-aid.git
   cd ipc-justice-aid
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Configure your environment variables
   ```

3. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Access the applications**
   - Web Frontend: http://localhost:3000
   - API Documentation: http://localhost:8000/api/docs/
   - Admin Panel: http://localhost:8000/admin/

### Development Setup

#### Backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### Web Frontend (Next.js)
```bash
cd frontend/web
npm install
npm run dev
```

#### Mobile App (Flutter)
```bash
cd frontend/mobile
flutter pub get
flutter run
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Django Settings
DJANGO_SECRET_KEY=your_secret_key_here
DJANGO_DEBUG=True
DATABASE_URL=postgresql://user:password@localhost:5432/ipc_justice_aid

# AI Services
OPENAI_API_KEY=your_openai_api_key
CLAUDE_API_KEY=your_claude_api_key

# Google OAuth
GOOGLE_OAUTH_CLIENT_ID=your_google_client_id
GOOGLE_OAUTH_CLIENT_SECRET=your_google_client_secret

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password

# Payment Gateway
STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## 📁 Project Structure

```
ipc-justice-aid/
├── backend/                    # Django backend
│   ├── apps/
│   │   ├── accounts/          # User management
│   │   ├── legal_analysis/    # AI legal analysis
│   │   ├── leads/            # Lead management
│   │   └── subscriptions/     # Payment handling
│   ├── config/               # Django configuration
│   └── requirements.txt
├── frontend/
│   ├── web/                  # Next.js web application
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── package.json
│   └── mobile/               # Flutter mobile app
│       ├── lib/
│       ├── android/
│       ├── ios/
│       └── pubspec.yaml
├── docker-compose.yml
├── Dockerfile
├── .env.example
└── README.md
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
python manage.py test
```

### Frontend Tests
```bash
cd frontend/web
npm run test
```

### Mobile Tests
```bash
cd frontend/mobile
flutter test
```

## 📊 API Documentation

The API is documented using Django REST Framework's built-in documentation. After running the server, visit:
- Swagger UI: `http://localhost:8000/api/docs/`
- ReDoc: `http://localhost:8000/api/redoc/`

### Key Endpoints

- `POST /api/v1/legal-analysis/` - Analyze legal incidents
- `GET /api/v1/leads/` - Fetch leads for lawyers
- `POST /api/v1/auth/google/` - Google OAuth authentication
- `POST /api/v1/subscriptions/` - Manage subscriptions

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Indian Penal Code legal framework
- Open source community
- Legal professionals providing guidance
- AI technology providers

## 📞 Support

- 📧 Email: support@ipc-justice-aid.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/ipc-justice-aid/issues)
- 📖 Documentation: [Wiki](https://github.com/yourusername/ipc-justice-aid/wiki)

---

<div align="center">
  <p>Made with ❤️ for accessible justice</p>
  <p>
    <a href="#top">Back to top</a> •
    <a href="https://github.com/yourusername/ipc-justice-aid/issues">Report Bug</a> •
    <a href="https://github.com/yourusername/ipc-justice-aid/issues">Request Feature</a>
  </p>
</div>
