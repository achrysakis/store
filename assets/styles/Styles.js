import { StyleSheet } from 'react-native';
import Variables from './Variables';

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
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
    marginBottom: 10
  },
  h4: {
    fontSize: 14,
    color: "#888"
  },  
  button: {
    backgroundColor: Variables.primary,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    flex: 1,
    margin: 10
  },

  productListItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    textAlign: 'center',
  },
  productListItemContent: {
    alignItems: "center",
    padding: 10
  },

  productListItemActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

});

export default Styles;