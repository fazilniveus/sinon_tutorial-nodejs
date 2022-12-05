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
		
		PROJECTKEY= 'network'
        	SONARURL = 'http://34.93.6.57:9000'
        	LOGIN= 'sqp_f741d02efb6d27d1a32f33fba69855545cdfc646'
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
                    sh "npm run sonar"
    			  }
        	}
        }
    }
}
