import React, { Component } from "react"

const AppContext = React.createContext()

class AppProvider extends Component {
    state = {
      activeSection: 1,
      sections: ['about', 'work', 'you', 'contact']
    }
  
    nextSection = () => {
      if(this.state.activeSection === 4) {
        this.setState({ activeSection: 1 })
      } else {
        this.setState({ activeSection: this.state.activeSection + 1 })
      }
    }

    previousSection = () => {
      if(this.state.activeSection === 1) {
        this.setState({ activeSection: 4 })
      } else {
        this.setState({ activeSection: this.state.activeSection - 1 })
      }
    }

    setSection = (section) => {
      if(section >= 1 && section <= 4) {
        this.setState({ activeSection: section })
      }
    }

    render() {
      return (
        <AppContext.Provider
          value={{
            activeSection: this.state.activeSection,
            sections: this.state.sections,
            nextSection: this.nextSection,
            previousSection: this.previousSection,
            setSection: this.setSection
          }}
        >
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
  
  const AppConsumer = AppContext.Consumer
  
  export { AppConsumer, AppContext }
  
  export default AppProvider
