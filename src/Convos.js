// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Convos.css';

// Convos should should the user's active conversations and let them access them
class Convos extends Component {
  // Since each block will differ when the cotent will be in a database, we will need a constructor to initialize each instance
  constructor () {
    // Call parent constructor method of Component, passing no values
    super();
    // The contructor is where you should fetch data to populate the feed block, to be added in development
  }
  render() {
    return (
      <div className="Convos">
          <div className="ConvoFeed">
            <p className="Placeholder">
              Convos:
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
              This is where the converstions should go, showing your active convos and the option to view the mesages.
            </p>            
          </div>
      </div>
    );
  }
}

// Export default for simplicity
export default Convos;