import React from "react";
import { SafeAreaView, Text } from "react-native";
import Carousel from "../../components/Carousel";
import { ICarouselItem } from "../../components/Carousel/Carousel";
import Feed from "../../components/Feed";
import { IFeedItem } from "../../components/Feed/Feed";
import styles from "./styles";

const DemoPage = (): JSX.Element => {

    const dummyPeople: ICarouselItem[] = [
        {
            picture: require('../../assets/people/pfp.png'),
            username: 'username1',
        },
        {
            picture: require('../../assets/people/pfp.png'),
            username: 'username2',
        },
        {
            picture: require('../../assets/people/pfp.png'),
            username: 'username3',
        },
        {
            picture: require('../../assets/people/pfp.png'),
            username: 'username4',
        },
        {
            picture: require('../../assets/people/pfp.png'),
            username: 'username5',
        }
    ]

    const dummyPosts: IFeedItem[] = [
        {
            image: require('../../assets/posts/puppies.jpg'),
            username: 'username1',
            caption: 'Look at my cute dogs!',
        },
        {
            image: require('../../assets/posts/puppies.jpg'),
            username: 'username2',
            caption: 'Look at my cute dogs!',
        },
        {
            image: require('../../assets/posts/puppies.jpg'),
            username: 'username13',
            caption: 'Look at my cute dogs!',
        },
        {
            image: require('../../assets/posts/puppies.jpg'),
            username: 'dager',
            caption: 'Look at my cute dogs!',
        },
        {
            image: require('../../assets/posts/puppies.jpg'),
            username: 'asdvas',
            caption: 'Look at my cute dogs!',
        },
        {
            image: require('../../assets/posts/puppies.jpg'),
            username: 'sadf',
            caption: 'Look at my cute dogs!',
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Demo Page</Text>
            <Carousel people={dummyPeople}/>
            <Feed posts={dummyPosts}/>
        </SafeAreaView>
    )
};

export default DemoPage;