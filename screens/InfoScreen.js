import { Modal, View, Button, StyleSheet, Text, ScrollView } from "react-native";

function Tiers(props) {
    return (
        //modal layout
        <Modal visible={props.visible} animationType="slide"> 
            <View style={styles.allModalContainer}>
                <View style={styles.button}>
                    <Button title="<" onPress={props.onClose} color='black' />
                </View>
                <View style={styles.content}>
                    <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false} bounces={false}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>TikTok Tiers</Text>
                            <View style={styles.underline}></View>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.bronzeTitle}>Bronze Tier</Text> 
                            <Text>First purchase - 2,000 EXP</Text>
                            <Text>You will automatically be upgrade to Bronze Tier after you have made your first purchase.</Text>
                            <Text>In Bronze Tier, you will enjoy 5% shopping discount for all your future purchases.</Text>
                            <Text>For every $1 spent, you will earn 10 EXP. Accumulation of EXP will upgrade your tier.</Text>
                            <Text style={styles.silverTitle}>Silver Tier</Text>
                            <Text>2,001 - 6,000 EXP</Text>
                            <Text>In Silver Tier, you will enjoy 5% shopping discount and 3% cashback points for all your future purchases.</Text>
                            <Text>For every $1 spent, you will earn 12 EXP. Accumulation of EXP will upgrade your tier.</Text>
                            <Text style={styles.goldTitle}>Gold Tier</Text>
                            <Text>6,001 - 10,000 EXP</Text>
                            <Text>In Gold Tier, you will enjoy 7% shopping discount and 6% cashback points for all your future purchases.
                                You are also entitled to Free Express Shippings.
                            </Text>
                            <Text>For every $1 spent, you will earn 15 EXP. Accumulation of EXP will upgrade your tier.</Text>
                            <Text style={styles.platTitle}>Platinum Tier</Text>
                            <Text>10,001 EXP and beyond</Text>
                            <Text>In Platinum Tier, you will enjoy 10% shopping discount and 7% cashback points for all your future purchases.
                                You are also entitled to Free Express Shippings.
                            </Text>
                            <Text>For every $1 spent, you will earn 18 EXP. Accumulation of EXP will upgrade your tier.</Text>
                            <View style={styles.expAndCBPContainer}>
                                <Text style={styles.expAndCBP}>EXP and cashback points</Text>
                            </View>
                            <Text>EXP can be earned by completeing daily quests! Complete daily quests consecutively to earn bonus EXP!
                                Take note of your position on the snake&ladder! 
                                Seize your chance of jumping tiers by inviting a friend when you land on the ladder. 
                                Beware when you land on the snake tail! Failure to check in for 3 day will lead to a deduction of EXP!
                            </Text>
                            <Text>Cashback points can be used to deduct up to 60% of the total amount of products when you make a purchase.
                                Cashback points will expire six months from the date they were earned, 
                                any unused cashback points will be removed from your account.
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default Tiers;

const styles = StyleSheet.create({
    allModalContainer: {
        flex: 1,
        backgroundColor: '#FF93AC'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-start',
        marginTop: 40,
        marginLeft: 14,
    },
    content: {
        flex: 12,
    },
    titleContainer: {
        flex: 1,
        alignSelf: "center"
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    contentContainer: {
        padding: 14
    },
    bronzeTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#eb7e26',
        textShadowOffset: { width: 2, height: 1 },
        textShadowColor: 'black',
        textShadowRadius: 3,
        paddingTop: 15

    },
    silverTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#b0d6d5',
        textShadowOffset: { width: 2, height: 1 },
        textShadowColor: 'black',
        textShadowRadius: 3,
        paddingTop: 15
    },
    goldTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#f2ce19',
        textShadowOffset: { width: 2, height: 1 },
        textShadowColor: 'black',
        textShadowRadius: 3,
        paddingTop: 15
    },
    platTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#16d1d1',
        textShadowOffset: { width: 2, height: 1 },
        textShadowColor: 'black',
        textShadowRadius: 3,
        paddingTop: 15
    },
    expAndCBPContainer: {
        paddingTop: 20,
        flex: 1,
        alignSelf: "flex-start"
    },
    expAndCBP: {
        fontWeight: 'bold',
        fontSize: 20,
        padding:3,
        borderBottomWidth: 2,
        borderTopWidth:1,
        backgroundColor:"#32fff86b",
        borderRadius:8,
        
    }
});