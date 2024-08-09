import React from 'react'
import customerjourneypic from '../../assets/bridge-customerjourney.jpg'
import './customersjourney.css'
import { Navbar, Footer } from '../../components'
import { Helmet } from 'react-helmet'

const Customersjourney = () => {
  return (
    <div className='customersjourney container-fluid'>
      <Navbar />
      <Helmet>
        <title>DISCOVER & LEVERAGE GROWTH OPPORTUNITIES WITHIN YOUR CUSTOMER'S JOURNEY</title>
        <meta 
            name='description'
            content='As a startup founder, you can leverage the growth opportunites hidden within each step your customer takes in their quest for the services provided by your company.'
        />
      </Helmet>
      <div className='customersjourney-content'>
        <h1 className='customersjourney-title'>Discover & Leverage Growth Opportunities within Your Customer's Journey</h1>
        <div className='customersjourney-image'>
            <img src={customerjourneypic} alt='Bridge Customer Journey' />
        </div>
        <div className='customersjourney-text'>
            <h4><i>
                Company A and Company B both offer online dating services to people, but while Company A sticks to the traditional swipe left or right methods, 
                Company B leverages artificial intelligence to not only match individuals based on their data which showcases their desires and preferences, but also uses the same AI to suggest restaurants for them,
                thereby making the first date the 'perfect date' for them. As an individual looking to try out online dating, which company would you most likely patronize?
            </i></h4>
            <br />
            <br />
            <p>
                Customers are the lifeblood of businesses worldwide. They are king and any company that desires growth needs to tap into the resources lying within the journey their customers take.
                <br />
                <br />
                You and I patronize businesses every now and then and it starts with a desire and above all things, what we desire when making any purchase is ease. Nobody wants to go through a tedious signup process and would avoid such at all cost. 
                Besides that, customers would lean towards companies that "read their minds"  and know thei wants or needs before they even think about it.
                In sales that is called upselling and it involves selling products or services that compliment the customers inital purchase.
                <br />
                <br />
                <b>PRACTICAL EXAMPLES</b>
                I would be examiming companies from 2 different industries, the entertainment industry and the social media industry.
                1. Company A, let's call it "Cupid's Company" operates an online dating service where people swipe left and right to get a match. 
                Now Cupid's company decides to take it a step further by leveraging artificial intelligence. When customers sign into the app and as they make use of the app, their data in terms who they swipe right or left to are stored and used to train the ai model on what kind of suggestions to make for them.
                In addition to all these, they decide to take it a step further, by also recommending first date ideas for budding couples when they decide to take it a step further. Since their data have both been collected and processed, there is already a 50%-70% chance that they would both agree with the suggestion provided.
                However, it is important to mention that proper caution needs to be taken in the gathering and use of these kinds of data. 
                <br />
                When people are faced with the dilemma of which online dating app to sign up to, the possibility of them signing up to Cupid's company is already way higher than other companies in the same industry still operating in the traditional methods. I would love to hear your thoughts on this. 
            </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Customersjourney
