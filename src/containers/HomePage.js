import { connect } from 'react-redux'
import HomePage from '../components/HomePage'

const mapStateToProps = (state) => ({ news: state.news, featured: state.featured })

const mapDispatchToProps = (dispatch) => ({
    loadHomePage: () => {
        dispatch({ type: "RECEIVE_NEWS", news: [{ name: 'Tales of a lost mine' }, { name: 'Clash royale' }]})
        dispatch({ type: "RECEIVE_FEATURED", featured: [{ name: 'Tales of a lost mine 2' }, { name: 'Clash royale 2' }]})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)