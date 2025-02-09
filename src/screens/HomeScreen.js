import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {questions} from '../constants/data';

import Question from '../components/Question';

const HomeScreen = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = answer => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onSubmit={handleSubmit}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
