pipeline {
  agent any

  stages {
    stage('build image') {
      steps {
        echo 'Building image...'
        sh 'apt-get update'
        sh 'apt-get install docker-ce docker-ce-cli containerd.io'
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
