import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BoardField from './BoardField';

const GameScreen = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [canMove, setCanMove] = useState(true);
  useEffect(() => {
    checkWinner();
  }, [board]);
  const handlePress = (index) => {
    if (!canMove) {
      return;
    }
    if (board[index] === null) {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
    else
    {
        alert("This field is already taken!");
    }
        
  };

  const checkWinner = () => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`Player ${currentPlayer} wins!`);
        setCanMove(false);
        return;
      }
    }
    setCanMove(true);
    
  };

  function reset() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
  }

  return (
    <View style={styles.container}>
      <Text>Current Player: {currentPlayer}</Text>
      <View style={styles.board}>
        {board.map((value, index) => (
          <BoardField key={index} value={value} onPress={() => handlePress(index)} />
        ))}
      </View>
      <Text onPress={reset}>Reset</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
});

export default GameScreen;