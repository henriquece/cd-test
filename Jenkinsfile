pipeline {
  agent any

  stages {
    stage('build image') {
      steps {
        echo 'Building image...'
        sh 'docker build -t cd-test .'
      }
    }

    stage('run container') {
      steps {
        echo 'Running container...'
        sh 'docker run -p 3000:3000 cd-test'
      }
    }
  }
}
