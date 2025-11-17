pipeline {

    agent any

    environment {
        // Load Vercel token stored in Jenkins Credentials
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the React project...'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to Vercel...'
                sh "npx vercel --prod --yes --token $VERCEL_TOKEN"
            }
        }
    }
}

