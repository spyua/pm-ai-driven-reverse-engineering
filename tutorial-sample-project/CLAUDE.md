# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-module Spring Boot microservices project called "Cloudy Homework" that integrates various Google Cloud Platform services. The project demonstrates cloud service integration including user authentication, file management, security encryption, and event processing.

## Architecture

```
cloudy-homework (Multi-module Maven project)
├── cloudy-security     # Security and authentication core module
├── cloudy-account      # User account management module  
├── cloudy-files        # File management module
└── cloudy-event        # Event processing module (Google Cloud Functions)
```

## Technology Stack

- **Framework**: Spring Boot 3.1.0
- **Language**: Java 17
- **Cloud Platform**: Google Cloud Platform
- **Database**: PostgreSQL (Google Cloud SQL)
- **Security**: Spring Security + JWT
- **Encryption**: Google Cloud KMS
- **Storage**: Google Cloud Storage
- **Events**: Google Cloud Functions
- **Build Tool**: Maven
- **Containerization**: Docker

## Common Development Commands

### Build Commands
```bash
# Clean and compile all modules
mvn clean compile

# Package all modules
mvn clean package

# Install dependencies for all modules
mvn clean install
```

### Module-Specific Operations
```bash
# Build specific module
cd cloudy-account
mvn clean package

# Run specific Spring Boot application
cd cloudy-account
mvn spring-boot:run

cd cloudy-files
mvn spring-boot:run
```

### Docker Operations
```bash
# Build Docker image for cloudy-account
cd cloudy-account
docker build -t cloudy-account .
docker run -p 8080:8080 cloudy-account

# Build Docker image for cloudy-files
cd cloudy-files
docker build -t cloudy-files .
docker run -p 8081:8080 cloudy-files
```

### Testing
```bash
# Run tests for all modules
mvn test

# Run tests for specific module
cd cloudy-account
mvn test
```

## Module Dependencies

- `cloudy-security`: Core security module used by other modules
- `cloudy-account`: Depends on `cloudy-security`
- `cloudy-files`: Depends on `cloudy-security`
- `cloudy-event`: Independent Google Cloud Function module

## Key Integration Points

### Security Module (`cloudy-security`)
- Provides JWT token utilities (`JwtTokenUtil`)
- Google Cloud KMS integration (`CryptoService`)
- Spring Security configuration
- User authentication services

### Account Module (`cloudy-account`)
- User registration and login endpoints
- PostgreSQL integration via Google Cloud SQL
- JWT authentication integration
- Runs on port 8080

### Files Module (`cloudy-files`)
- File upload/download via Google Cloud Storage
- File metadata management in PostgreSQL
- JWT-based authentication required
- Runs on port 8081 (when running locally)

### Event Module (`cloudy-event`)
- Google Cloud Functions for storage events
- Automatic image compression processing
- Event-driven architecture

## Configuration Requirements

Each module requires proper configuration in `application.properties`:

### Database Configuration
- Google Cloud SQL PostgreSQL instance
- Secret Manager integration for credentials
- Database name: `cloudy_homework`

### GCP Services Required
- Google Cloud Storage (for file operations)
- Google Cloud SQL (PostgreSQL database)
- Google Cloud KMS (for encryption)
- Google Cloud Functions (for event processing)
- Google Secret Manager (for credentials)

## API Endpoints

### Account Module (port 8080)
- `POST /login` - User authentication
- `POST /register` - User registration

### Files Module (port 8081)
- `POST /file/upload` - File upload (requires JWT)
- `POST /file/getfile` - File download (requires JWT)
- `POST /file/getFileList` - List files (requires JWT)

## Development Notes

- The project uses Lombok for reducing boilerplate code
- JWT tokens are required for file operations
- File uploads are limited to 10MB
- All modules use Spring Boot 3.1.0 with Java 17
- The project integrates heavily with GCP services

## Security Considerations

- JWT tokens have expiration limits
- All file operations require valid authentication
- Google Cloud KMS is used for sensitive data encryption
- Secret Manager is used for storing database credentials