import React from "react"
import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

export interface ICarouselItem {
    picture: ImageSourcePropType,
    username: string,
}

interface ICarouselProps {
    people: ICarouselItem[]
}

const Carousel = (props: ICarouselProps): JSX.Element => {

    const onPress = (username: string): void => {
        // go to their profile?
    }

    return (
        <ScrollView 
            style={styles.container}
            horizontal={true}
        >
            {props.people.map((person, ix): JSX.Element => {
                return (
                    <TouchableOpacity 
                        onPress={() => onPress(person.username)}
                        key={`${person.username}-${ix}`}
                        style={styles.personContainer}
                    >
                        <Image style={styles.image} source={person.picture}/>
                        <Text style={styles.text}>{person.username}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default Carousel;