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
		PROJECTKEY= 'springcicddemo'
        	SONARURL = 'http://34.93.6.57:9000'
        	LOGIN= 'sqp_05378a0d407f7b463717bdc0755e4c5965ff0bf8'
		

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
