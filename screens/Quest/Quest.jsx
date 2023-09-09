import React from 'react'
import {useState} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import ProgressBar from 'react-native-paper';

import styles from './quest.style'
import { COLORS } from '../../constant/theme';
import { useGlobalData } from '../../globalDataContext';

const Quest = () => {
  const { globalData, updateGlobalData } = useGlobalData();

  const increasePoints = (pointNum) => {
    const newPoints = globalData.points + pointNum;
    globalData.points = newPoints;
    updateGlobalData({ points: newPoints });
  };
  const [activeTab, setActiveTab] = useState('dailyQuest'); // Initial active tab

  const handleDailyQuestPress = () => {
    setActiveTab('dailyQuest'); // Set the active tab to "dailyQuest"
  };

  const handleAchievementPress = () => {
    setActiveTab('achievement'); // Set the active tab to "achievements"
  };

  //stuff for daily quest
  const [isCheckInButtonClicked, setIsCheckInButtonClicked] = useState(false);
  const [isFriendButtonClicked, setIsFriendButtonClicked] = useState(false); 
  const [isPurchaseButtonClicked, setIsPurchaseButtonClicked] = useState(false); 
  const [isOnlineButtonClicked, setIsOnlineButtonClicked] = useState(false)

  const handleCheckInButtonClick = () => {
    setIsCheckInButtonClicked(true);
  };
  const handleFriendButtonClick = () => {
    setIsFriendButtonClicked(true);
  };
  const handlePurchaseButtonClick = () => {
    setIsPurchaseButtonClicked(true);
  };
  const handleOnlineButtonClick = () => {
    setIsOnlineButtonClicked(true);
  };

  //stuff for achievements
  const [isAchievementButton1Clicked, setAchievementButton1Clicked] = useState(true);
  const [isAchievementButton2Clicked, setAchievementButton2Clicked] = useState(true); 
  const [isAchievementButton3Clicked, setAchievementButton3Clicked] = useState(true); 

  const handleAchievementButton1Click = () => {
    setAchievementButton1Clicked(true);
  };

  const handleAchievementButton2Click = () => {
    setAchievementButton2Clicked(true);
  };

  const handleAchievementButton3Click = () => {
    setAchievementButton3Clicked(true);
  };

  return (
    <View style={styles.container}>
      <Text>{globalData.points} xp</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDailyQuestPress}
        >
          <Text style={styles.buttonText}>Daily Quests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={activeTab === 'achievement' ? null : handleAchievementPress}
        >
          <Text style={styles.buttonText}>Achievements</Text>
        </TouchableOpacity>
      </View>

      {activeTab == 'dailyQuest' && (
      <View style={styles.container}>
      <View style={styles.contentBox}>

        <View style={styles.questContainer}>
          <Text style={styles.questText}>Daily Check-in</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isCheckInButtonClicked? COLORS.gray : COLORS.lightpink }]} 
          onPress={() => {
            increasePoints(50);
            handleCheckInButtonClick();
          }} 
          disabled={isCheckInButtonClicked}>
            <Text style={styles.buttonText}>50 XP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.questContainer}>
          <Text style={styles.questText}>Invite a friend</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isFriendButtonClicked? COLORS.gray : COLORS.lightpink }]} 
            onPress={() => {
              increasePoints(100);
              handleFriendButtonClick();
            }}
            disabled={isFriendButtonClicked}>
              <Text style={styles.buttonText}>100 XP</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.questContainer}>
          <Text style={styles.questText}>Made purchases</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isPurchaseButtonClicked? COLORS.gray : COLORS.lightpink }]} 
          onPress={() => {
            increasePoints(50);
            handlePurchaseButtonClick();
          }} 
          disabled={isPurchaseButtonClicked}>
              <Text style={styles.buttonText}>50 XP</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.questContainer}>
          <Text style={styles.questText}>Online for 30 mins</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isOnlineButtonClicked? COLORS.gray : COLORS.lightpink }]} 
          onPress={ () => {
            increasePoints(50);
            handleOnlineButtonClick();
          }} 
          disabled={isOnlineButtonClicked}>
              <Text style={styles.buttonText}>50 XP</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
      )}

      {activeTab == 'achievement' && (
        <View style={styles.container}>
        <View style={styles.contentBox}>
          <View style={styles.buttonContainer}>
          <Text style={styles.questText}>Checked in 10 days</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isAchievementButton1Clicked? COLORS.gray : COLORS.lightpink }]} 
          onPress={ () => {
            increasePoints(100);
            handleAchievementButton1Click(); 
          }} 
          disabled={isAchievementButton1Clicked}>
              <Text style={styles.buttonText}>100 XP</Text>
          </TouchableOpacity>
          </View>
          <ProgressBar progress={0.3} width={200} height={20} />

          <View style={styles.buttonContainer}>
          <Text style={styles.questText}>Invited 20 friends</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isAchievementButton2Clicked? COLORS.gray : COLORS.lightpink }]} 
          onPress={ () => {
            increasePoints(100);
            handleAchievementButton2Click(); 
          }} 
          disabled={isAchievementButton2Clicked}>
              <Text style={styles.buttonText}>100 XP</Text>
          </TouchableOpacity>
          </View>
          <ProgressBar progress={0.5} width={200} height={20} />

          <View style={styles.buttonContainer}>
          <Text style={styles.questText}>Made 5 purchases</Text>
          <TouchableOpacity style={[styles.xpButton, { backgroundColor: isAchievementButton3Clicked? COLORS.gray : COLORS.lightpink }]} 
          onPress={ () => {
            increasePoints(100);
            handleAchievementButton3Click(); 
          }} 
          disabled={isAchievementButton3Clicked}>
              <Text style={styles.buttonText}>100 XP</Text>
          </TouchableOpacity>
          </View>
          <ProgressBar progress={0.6} width={200} height={20} />
        </View>
        </View>
      )}
    </View>
  )
}

export default Quest;