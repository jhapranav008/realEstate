import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const Auth = () => {

    const { refetch, loading, isLoggedIn } = useGlobalContext();

    if(!loading && isLoggedIn) return <Redirect href="/" />

    const handleLogin = async () => {
        const result = await login();

        if(result){
            refetch()
        }else{
            Alert.alert('Error', 'Failed To Login')
        }

        
    }

  return (
    <SafeAreaView className="bg-white h-full">
        <ScrollView contentContainerClassName="h-full" >
            <Image
                source={images.onboarding}
                resizeMode='contain'
                className='w-full h-3/5 mt-4'
            />
            <View className='px-8'>
                <Text className='text-base text-center uppercase font-rubik text-black-200'>
                    Welcome To ReState 
                 </Text>
                <Text className='text-center text-3xl font-rubik-bold text-black-300 mt-2'>
                
                    Let's Get You Closer to {"\n"}
                    <Text className='text-primary-300'>Your Ideal Home</Text>
                </Text>

                <Text className="text-md font-rubik-light text-black-200 text-center mt-8">
                     Login to Real Scout with Google
                </Text>

                <TouchableOpacity 
                    className='bg-white shadow-md shadow-zinc-800 rounded-full w-full py-4 mt-5'
                    onPress={handleLogin}
                >
                    <View className='flex flex-row items-center justify-center' >
                        <Image
                            source={icons.google}
                            className='w-5 h-5'
                            resizeMode='contain'
                        />

                        <Text className='text-lg font-rubik-medium text-black-300 ml-2' >
                            Continue with Google
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

            


        </ScrollView>
    </SafeAreaView>
  )
}

export default Auth
