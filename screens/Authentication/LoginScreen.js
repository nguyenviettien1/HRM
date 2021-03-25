import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>A</Text>
          <Text style={styles.hiText}>P</Text>
          <Text style={styles.hiText}>A</Text>
          <Text style={styles.hiText}>T</Text>
          <Text style={styles.hiTextE}>E</Text>
          <Text style={styles.hiText}>K</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formInput}>
            <FontAwesome name="user" style={styles.iconLock} />
            <TextInput
              style={styles.inputPassword}
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Tài khoản"
              placeholderTextColor="#929292"
            />
          </View>
          <View style={styles.formInput}>
            <FontAwesome5 name="lock" style={styles.iconLock} />

            <TextInput
              style={styles.inputPassword}
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật khẩu"
              placeholderTextColor="#929292"
            />
          </View>

          <TouchableOpacity style={styles.buttonLogin}>
            <Text
              style={styles.buttonLoginText}
              onPress={() => navigation.navigate("MenuTab")}
            >
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText}>LIÊN HỆ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
