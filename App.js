import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const notifications = [
    {
      icon: 'check-circle',
      title: 'Bước 1 Xác định nhu cầu khách hàng',
      description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
      time: '20/08/2020, 06:00',
    },
    {
      icon: 'users',
      title: 'Bạn có khách hàng mới!',
      description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
      time: '20/08/2020, 06:00',
    },
    {
      icon: 'users',
      title: 'Khách hàng được chia sẻ bị trùng',
      description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
      time: '20/08/2020, 06:00',
    },
    {
      icon: 'users',
      title: 'Khách hàng được thêm bị trùng',
      description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
      time: '20/08/2020, 06:00',
    },
    {
      icon: 'check-circle',
      title: 'Công việc sắp đến hạn trong hôm nay',
      description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
      time: '20/08/2020, 06:00',
    },
    {
      icon: 'check-circle',
      title: 'Công việc đã quá hạn',
      description: 'Bạn có 17 công việc bị quá hạn.Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
      time: '20/08/2020, 06:00',
    },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <ScrollView style={styles.notificationList}>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <FontAwesome name={notification.icon} size={24} color="#007bff" />
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{notification.title}</Text>
              <Text style={styles.description}>{notification.description}</Text>
              <Text style={styles.time}>{notification.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
  },
  notificationList: {
    paddingHorizontal: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});
