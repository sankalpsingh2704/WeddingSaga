import React from 'react';

export default class Wedding extends React.Component{
    constructor(props){
        super(props);
    }

    gallery = _ => {
        let photos = [
            "gallery-1.jpg",
            "gallery-2.jpg",
            "gallery-3.jpg",
            "gallery-4.jpg",
            "gallery-5.jpg",
            "gallery-6.jpg",
            "gallery-7.jpg",
            "gallery-8.jpg"
        ];
        return (
            <section className="ftco-section" id="gallery-section">
                <div className="container-fluid px-md-4">
                    <div className="row justify-content-center pb-5">
                <div className="col-md-12 text-center heading-section ftco-animate">
                    <span className="clone"></span>
                    <h2 className="mb-3">Gallery</h2>
                </div>
                </div>
                <div className="row">
                    {
                        photos.map((x,i) => 
                            <div key={i} className="col-md-3 ftco-animate">
                                <a href={`public/images/${x}`} className="gallery img image-popup d-flex align-items-center justify-content-center" style={{"backgroundImage": `url(${'public/images/'+x})`}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image"></span></div>
                                </a>
                            </div>
                            )
                    }
                </div>
    	    </div>
        </section>
        )
    }
    render(){
        const Gallery = this.gallery;
        return(
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Wedding</a>
	      <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav nav ml-auto">
	          <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
	          <li className="nav-item"><a href="#groom-bride-section" className="nav-link"><span>Groom &amp; Bride</span></a></li>
	          <li className="nav-item"><a href="#lovestory-section" className="nav-link"><span>Love Story</span></a></li>
	          <li className="nav-item"><a href="#greeting-section" className="nav-link"><span>Greetings</span></a></li>
	          <li className="nav-item"><a href="#people-section" className="nav-link"><span>People</span></a></li>
	          <li className="nav-item"><a href="#when-where-section" className="nav-link"><span>When &amp; Where</span></a></li>
	          <li className="nav-item"><a href="#rsvp-section" className="nav-link"><span>RSVP</span></a></li>
	          <li className="nav-item"><a href="#gallery-section" className="nav-link"><span>Gallery</span></a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
            
	  <section id="home" className="video-hero js-fullheight" style={{"height": "700px", "backgroundImage": `url(${'public/images/bg_1.jpg'})`, "backgroundSize":"cover", "backgroundPosition": "top center"}} data-stellar-background-ratio="0.5">
	  	<div className="overlay"></div>
			<a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Mjjw19B7rMk',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}"></a>
			<div className="container">
				<div className="row js-fullheight justify-content-center d-flex align-items-center">
					<div className="col-md-12">
						<div className="text text-center">
							<div className="icon">
								<span className="flaticon-rose-outline-variant-with-vines-and-leaves"></span>
							</div>
							<span className="subheading">The Wedding of</span>
							<h1>Sankalp &amp; Khushbu</h1>
							<div id="timer" className="d-flex">
							  <div className="time" id="days"></div>
							  <div className="time pl-3" id="hours"></div>
							  <div className="time pl-3" id="minutes"></div>
							  <div className="time pl-3" id="seconds"></div>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</section>
            
        
		<section className="ftco-section ftco-about ftco-no-pt ftco-no-pb" id="groom-bride-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-12">
    				<div className="wrap">
			    		<div className="row d-flex">
			    			<div className="col-md-6 d-flex">
			    				<div className="img d-flex align-self-stretch align-items-center" style={{"backgroundImage":`url(${'public/images/about.jpg'})`}}>
			    				</div>
			    			</div>
			    			<div className="col-md-6 py-md-5 text">
			    				<div className="py-md-4">
				    				<div className="row justify-content-start pb-3">
						          <div className="col-md-12 ftco-animate p-4 p-lg-5 text-center">
						          	<span className="subheading mb-4">Join us to celebrate <br/>the wedding day of</span>
						            <h2 className="mb-4">Sankalp <span>&amp;</span> Khushbu</h2>
						            <span className="icon flaticon-rose-variant-outline-with-vines"></span>
						            <span className="subheading">Which is celebration on</span>
						           	<p className="time mb-4"><span>March | 2 | 2020</span></p>
						           	<span className="subheading mb-5">Starting at 7:00 <br/> in the evening</span>
						           	<span className="subheading mb-5">Near By Sports Club, Lukarganj <br/> in Prayagraj, Uttar Pradesh</span>
						          </div>
						        </div>
					        </div>
				        </div>
			        </div>
			      </div>
		      </div>
		    </div>
    	</div>
    </section>
        
    
    <section className="ftco-section bg-section">
    	<div className="overlay-top" style={{"backgroundImage": `url(${'public/images/top-bg.jpg'})`}}></div>
    	<div className="overlay-bottom" style={{"backgroundImage": `url(${'public/images/bottom-bg.jpg'})`}}></div>
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center heading-section ftco-animate">
          	<span className="clone">Bride &amp; Groom</span>
            <h2 className="mb-3">Bride &amp; Groom</h2>
          </div>
        </div>
        <div className="row justify-content-center">
        	<div className="col-md-10">
        		<div className="row">
		        	<div className="col-md-6 text-center d-flex align-items-stretch">
		        		<div className="bride-groom ftco-animate">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/groom.jpg'})`}}></div>
		        			<div className="text mt-4 px-4">
		        				<h2>Sankalp Singh</h2>
		        				<p>Far far away, behind the word mountains, far from the state Uttar Pradesh and Prayagraj, there live the blind texts. Separated they live in Bangalore right at the coast of the Semantics, a large Silicon Valley of India.</p>
		        			</div>
		        		</div>
		        	</div>
		        	<div className="col-md-6 text-center d-flex align-items-stretch">
		        		<div className="bride-groom ftco-animate">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/bride.jpg'})`}}></div>
		        			<div className="text mt-4 px-4">
		        				<h2>Khushbu Verma</h2>
		        				<p>Far far away, behind the word mountains, far from the state Chattisgarh and Bilaspur, there live the blind texts. Separated they live in Bangalore right at the coast of the Semantics, a large Silicon Valley of India.</p>
		        			</div>
		        		</div>
		        	</div>
		        </div>
		      </div>
        </div>
    	</div>
    </section>
    
    

   	<section className="ftco-section" id="lovestory-section">
   		<div className="container">
   			<div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center heading-section ftco-animate">
          	<span className="clone">Love Story</span>
            <h2 className="mb-3">Love Story</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-12">
        		<ul className="timeline animate-box">
							<li className="animate-box">
								<div className="timeline-badge" style={{"backgroundImage":`url(${'public/images/couple-1.jpg'})`}}></div>
								<div className="timeline-panel ftco-animate text-md-right">
									<div className="overlay"></div>
									<div className="timeline-heading">
										<span className="date">June 10, 2017</span>
										<h3 className="timeline-title">First We Meet</h3>
									</div>
									<div className="timeline-body">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted animate-box">
								<div className="timeline-badge" style={{"backgroundImage":`url(${'public/images/couple-2.jpg'})`}}></div>
								<div className="timeline-panel ftco-animate">
									<div className="overlay overlay-2"></div>
									<div className="timeline-heading">
										<span className="date">June 10, 2017</span>
										<h3 className="timeline-title">First Date</h3>
									</div>
									<div className="timeline-body">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
									</div>
								</div>
							</li>
							<li className="animate-box">
								<div className="timeline-badge" style={{"backgroundImage":`url(${'public/images/couple-3.jpg'})`}}></div>
								<div className="timeline-panel ftco-animate text-md-right">
									<div className="overlay"></div>
									<div className="timeline-heading">
										<span className="date">June 14, 2017</span>
										<h3 className="timeline-title">In A Relationship</h3>
									</div>
									<div className="timeline-body">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted animate-box">
								<div className="timeline-badge" style={{"backgroundImage":`url(${'public/images/couple-4.jpg'})`}}></div>
								<div className="timeline-panel ftco-animate">
									<div className="overlay overlay-2"></div>
									<div className="timeline-heading">
										<span className="date">May. 10, 2019</span>
										<h3 className="timeline-title">We're Engaged</h3>
									</div>
									<div className="timeline-body">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
									</div>
								</div>
							</li>
			    	</ul>
        	</div>
        </div>
   		</div>
   	</section>
    
   	<section className="ftco-section bg-light" id="greeting-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center heading-section ftco-animate">
          	<span className="clone">Testimony</span>
            <h2 className="mb-3">Sweet Messages</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{"backgroundImage": `url(${'public/images/person_1.jpg'})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{"backgroundImage": `url(${'public/images/person_2.jpg'})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{"backgroundImage": `url(${'public/images/person_3.jpg'})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{"backgroundImage": `url(${'public/images/person_1.jpg'})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{"backgroundImage": `url(${'public/images/person_2.jpg'})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>
    
    
    <section className="ftco-section" id="people-section">
    	<div className="container-fluid px-md-5">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center heading-section ftco-animate">
          	<span className="clone">People</span>
            <h2 className="mb-3">Family &amp; Friends</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-12">
        		<div className="carousel-friends owl-carousel ftco-owl ftco-animate">
        			<div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/groom-men-1.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Mark Tomy</h3>
		        				<span>Groomsmen</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/groom-men-2.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>John Henceworth</h3>
		        				<span>Groomsmen</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/groom-men-3.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Rey Cooper</h3>
		        				<span>Groomsmen</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/groom-men-4.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Robert Chan</h3>
		        				<span>Groomsmen</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/bridesmaid-1.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Rose Jones</h3>
		        				<span>Bridesmaid</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/bridesmaid-2.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Mary Dell</h3>
		        				<span>Bridesmaid</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/bridesmaid-3.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Alicia Brean</h3>
		        				<span>Bridesmaid</span>
		        			</div>
		        		</div>
              </div>
              <div className="item">
                <div className="people text-center">
		        			<div className="img" style={{"backgroundImage": `url(${'public/images/bridesmaid-4.jpg'})`}}></div>
		        			<div className="text">
		        				<h3>Angel Worth</h3>
		        				<span>Bridesmaid</span>
		        			</div>
		        		</div>
              </div>
        		</div>
        	</div>
        </div>
    	</div>
    </section>
    
    
    <section className="ftco-section bg-light" id="when-where-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center heading-section ftco-animate">
          	<span className="clone">Place</span>
            <h2 className="mb-3">Place &amp; Time</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4 ftco-animate">
        		<div className="place img" style={{"backgroundImage": `url(${'public/images/place-1.jpg'})`}}>
        			<div className="text text-center">
	        			<span className="icon flaticon-reception-bell"></span>
	        			<h3>The Reception</h3>
	        			<p><span>Saturday, 28, 2019</span><br/><span>02:00 pm-10:00 pm</span></p>
	        			<p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
	        			<p><a href="#">+0 (123) 456 78 910</a></p>
	        			<p><a href="#" className="btn-custom">See Map</a></p>
	        		</div>
        		</div>
        	</div>
        	<div className="col-md-4 ftco-animate">
        		<div className="place img" style={{"backgroundImage": `url(${'public/images/place-2.jpg'})`}}>
        			<div className="text text-center">
	        			<span className="icon flaticon-wedding-kiss"></span>
	        			<h3>The Ceremony</h3>
	        			<p><span>Saturday, 28, 2019</span><br/><span>02:00 pm-10:00 pm</span></p>
	        			<p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
	        			<p><a href="#">+0 (123) 456 78 910</a></p>
	        			<p><a href="#" className="btn-custom">See Map</a></p>
	        		</div>
        		</div>
        	</div>
        	<div className="col-md-4 ftco-animate">
        		<div className="place img" style={{"backgroundImage": `url(${'public/images/place-3.jpg'})`}}>
        			<div className="text text-center">
	        			<span className="icon flaticon-cake"></span>
	        			<h3>The Party</h3>
	        			<p><span>Saturday, 28, 2019</span><br/><span>02:00 pm-10:00 pm</span></p>
	        			<p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
	        			<p><a href="#">+0 (123) 456 78 910</a></p>
	        			<p><a href="#" className="btn-custom">See Map</a></p>
	        		</div>
        		</div>
        	</div>
        </div>
    	</div>
        </section>
    
    
    <section className="ftco-section bg-secondary" id="rsvp-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center heading-section ftco-animate">
          	<span className="clone">RSVP</span>
            <h2 className="mb-3">Are Your Attending?</h2>
          </div>
        </div>
        <div className="row justify-content-center">
        	<div className="col-md-7">
        		<form action="#" className="rsvp-form ftco-animate">
	    				<div className="">
		    				<div className="form-group">
		    					<input type="text" className="form-control" placeholder="Name" />
		    				</div>
		    				<div className="form-group">
		    					<input type="text" className="form-control" placeholder="Your email" />
		    				</div>
	    				</div>
	    				<div className="">
	    					<div className="form-group">
		    					<div className="form-field">
          					<div className="select-wrap">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-down"></span></div>
                      <select name="" id="" className="form-control">
                      	<option value="">Guest</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                      </select>
                    </div>
		              </div>
		    				</div>
	    				</div>
	    				<div className="">
	    					<div className="form-group">
		              <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
		            </div>
		            <div className="form-group">
		              <input type="submit" value="I am attending" className="btn btn-primary py-3 px-4" />
		            </div>
	    				</div>
	    			</form>
        	</div>
        </div>
    	</div>
        </section>
    
    
    <Gallery />
    
  	<footer className="ftco-footer ftco-section">
    	<div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Wedding</h2>
              <p>Far far away, behind the word mountains, far from the countries.</p>
              <ul className="ftco-footer-social list-unstyled mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Wellness</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Vintge stores</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Trekking</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Tour</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Sightseeing</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Many more..</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Groom &amp; Bride</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Story</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Greetings</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>People</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Where &amp; When</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>RSVP</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Gallery</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Organizer</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Venue</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Wedding Ceremony</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Accomodation</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope pr-4"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
	
            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  </p>
          </div>
        </div>
      </div>
    </footer>
            </div>
        )
    }
}