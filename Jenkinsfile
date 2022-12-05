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
		  sh 'rm -rf node_modules"
                  sh 'npm install'
              }
      }
      
       stage('SonarQube analysis') {
        	steps{
        		withSonarQubeEnv('sonarqube-9.7.1') { 
              			sh "npm install sonar-scanner"
				
				sh "npm install --save --dev mocha chai"
				sh "npm run test"
				sh "npm run coverage-lcov"
                    		sh "npm run sonar"
    			  }
        	}
        }
    }
}
