pipeline {
  agent any

	tools {
		nodejs "NodeJS"
	}
	
	environment {
		PROJECT_ID = 'tech-rnd-project'
                CLUSTER_NAME = 'network18-cluster'
                LOCATION = 'us-central1-a'
                CREDENTIALS_ID = 'kubernetes'	
		
		PROJECTKEY= 'divya'
        	SONARURL = 'http://34.93.6.57:9000'
        	LOGIN= 'sqp_a55bf37bb99312d47c13e62b1aab5c005e6e27bd'
	}
	
    stages {
	    stage('Scm Checkout') {
		    steps {
			    	checkout scm
		    }
	    }
      
      stage('build') {
              steps {
                  echo 'building the software'
		  sh 'rm package-lock.json'
                  sh 'npm install'
              }
      }
      
       stage('SonarQube analysis') {
        	steps{
        		withSonarQubeEnv('sonarqube-9.7.1') { 
              			sh "npm install sonar-scanner"
                    sh "npm run sonar sonar.login=“admin” sonar.login=“sonar”"
    			  }
        	}
        }
    }
}
