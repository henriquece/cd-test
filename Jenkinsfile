pipeline {
  agent any

  environment {
    VERSION="${env.BUILD_NUMBER}"
  }

  stages {
    stage('echo version') {
      steps {
        script{
          env.IMAGE_NAME = "cd-test-$VERSION"
        }
        echo "Name: ${IMAGE_NAME}"
      }
    }

    stage('build image') {
      steps {
        echo 'Building image...'
        sh 'docker build -t ${IMAGE_NAME} .'
      }
    }

    stage('deploy') {
      steps {
        echo 'Deploying...'
        sh 'sed -i -e "s/<IMAGE_NAME_CD_TEST>/${IMAGE_NAME}/" cd-test.yml'
        sh 'cat cd-test.yml'
        sh 'kubectl apply -f cd-test.yml'
      }
    }
  }
}
