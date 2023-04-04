import React, { useEffect } from 'react';
import {Platform, BackHandler,SafeAreaView, StyleSheet,Text,View, KeyboardAvoidingView, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Button from './button';
import './global.js';

export default function DashboardUser(props) {

    useEffect(() =>{

    }, []);
    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            goback();
            return true;
          };
       
          BackHandler.addEventListener(
            'hardwareBackPress', onBackPress
          );
       
          return () =>
            BackHandler.removeEventListener(
              'hardwareBackPress', onBackPress
            );
        }, [])
      );
    
    const storeStringData = async (key,value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
        }    
    }


    const styles = StyleSheet.create(
        Platform.select({
            ios:global.mainstyles,
            android:global.mainstyles,
            default:global.mainstyles
        })
    );


    const goback = () => {
        storeStringData('projectkmsi',"false");
        storeStringData("projecttoken",'');
        storeStringData("projectpass",'');
        props.pagging(0)
    }

    return (
        <SafeAreaView>
            <View style={styles.navbar}>
                <View style={styles.backbuttonview}>
                    <Button
                        textstyle={styles.backbutton}
                        title="Back"
                        onPress={goback}>
                    </Button>
                </View>
                <View style={styles.addbuttonview}>
                    <Button
                        textstyle={styles.addbutton}
                        title="Settings"
                        onPress={() => props.pagging(5)}>
                    </Button>
                </View>
            </View>
            <View style={styles.scrollView}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "height" : "padding"}
                    enabled>
                    <ScrollView>
                        <Text style={styles.dashboardheader}>
                            Welcome Admin {props.user.name}!
                        </Text>
                        <Button
                            title="Settings" 
                            textstyle={styles.topbutton}
                            onPress={() => props.pagging(5)}></Button>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
        
    )
}