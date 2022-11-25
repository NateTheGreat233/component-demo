import React from "react";
import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

export interface IFeedItem {
    image: ImageSourcePropType,
    username: string,
    caption: string,
}

interface IFeedProps {
    posts: IFeedItem[]
}

const Feed = (props: IFeedProps): JSX.Element => {

    const onPress = (username: string): void => {
        // do something here!
    }

    return (
        <ScrollView style={styles.container}>
            {props.posts.map((post, ix): JSX.Element => {
                return (
                    <TouchableOpacity 
                        style={styles.postContainer} 
                        key={`${post.username}-${ix}`} 
                        onPress={() => onPress(post.username)}
                    >
                        <Image style={styles.image} source={post.image}/>
                        <Text style={styles.text}>{post.caption}</Text>
                        <Text style={styles.text}>{`Posted by: ${post.username}`}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default Feed;