import { StyleSheet, Platform } from 'react-native';
import { changeQuantity } from '../../store/actions/cart';
import Variables from './Variables';

const Styles = StyleSheet.create({
  header: {
    fontFamily: "roboto-bold",
    color: Variables.black
  },
  main: {
    backgroundColor: Variables.white
  },
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
    fontFamily: 'roboto',
  },
  imageContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainerWithRadius: {
    borderTopLeftRadius: 10,    
    borderTopRightRadius: 10,
  },
  center: {
    alignItems: 'center'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    fontFamily: 'roboto-bold'
  },
  h3: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'roboto'
  },  
  h4: {
    fontSize: 14,
    color: "#888",
    fontFamily: 'roboto'
  },  
  button: {
    backgroundColor: Variables.primary,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    fontFamily: 'roboto'
  },

  productListItem: {
    backgroundColor: 'white',
    fontFamily: 'roboto',
    flexDirection: 'row',
    paddingVertical: 5,
    borderColor: "#ccc",
    borderBottomWidth: 1
  },

  productListItemContent: {
    fontFamily: 'roboto',
    paddingVertical: 0,
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'column'
  },

  productListItemActions: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: 'roboto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: "50%",
    paddingHorizontal: 5
  },

  basketContainer: {
    zIndex: 1, 
    fontSize: 10, 
    color: "#fff", 
    position: 'absolute', 
    top: -8, 
    right: -8,
    zIndex: 1, 
    backgroundColor: Variables.primary, 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    flexDirection: 'row',  
    alignItems: 'center', 
    flex: 1, 
    textAlign: 'center', 
    alignContent: 'center'    
  },

  basket: {
    color: Variables.white, 
    fontSize: 10, 
    textAlign: 'center', 
    flex: 1
  },

  orderNow: {
    padding: 10
  }

});

export default Styles;