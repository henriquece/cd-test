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
        sh 'sudo docker build -t ${IMAGE_NAME} .'
      }
    }

    // stage('run container') {
    //   steps {
    //     echo 'Running container...'
    //     sh 'sudo docker run -d -p 3000:3000 cd-test'
    //   }
    // }
  }
}
