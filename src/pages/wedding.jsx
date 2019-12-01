import React from 'react';

export default class Wedding extends React.Component {
	constructor(props) {
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
							photos.map((x, i) =>
								<div key={i} className="col-md-3 ftco-animate">
									<a href={`public/images/${x}`} className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ "backgroundImage": `url(${'public/images/' + x})` }}>
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
	sweetMessages = _ => {
		const messages = [
			{ Name: "Roger Scott 1", Message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", Position: "Marketing Manager", Photo: "person_1.jpg" },
			{ Name: "Roger Scott 2", Message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", Position: "Marketing Manager", Photo: "person_2.jpg" },
			{ Name: "Roger Scott 3", Message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", Position: "Marketing Manager", Photo: "person_3.jpg" },
			{ Name: "Roger Scott 4", Message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", Position: "Marketing Manager", Photo: "person_1.jpg" },
			{ Name: "Roger Scott 5", Message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", Position: "Marketing Manager", Photo: "person_2.jpg" }
		];
		return (
			<section className="ftco-section bg-light" id="greeting-section">
				<div className="container">
					<div className="row justify-content-center pb-5">
						<div className="col-md-12 text-center heading-section ftco-animate">
							<span className="clone"></span>
							<h2 className="mb-3">Sweet Messages</h2>
						</div>
					</div>
					<div className="row ftco-animate">
						<div className="col-md-12">
							<div className="carousel-testimony owl-carousel ftco-owl">
								{
									messages.map((x, i) => {
										return (
											<div className="item">
												<div className="testimony-wrap py-4">
													<div className="text">
														<p className="mb-4">{x.Message}</p>
														<div className="d-flex align-items-center">
															<div className="user-img" style={{ "backgroundImage": `url(${'public/images/' + x.Photo})` }}></div>
															<div className="pl-3">
																<p className="name">{x.Name}</p>
																<span className="position">{x.Position}</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										)
									})
								}

							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
	familyAndFriends = _ => {
		const peoples = [
			{ Name: "Roli, Sakshi", Type: "Groomsmen", Photo: "rols.jpg" },
			{ Name: "Akanksha", Type: "Groomsmen", Photo: "akanksha.jpg" },
			{ Name: "Rahul", Type: "Groomsmen", Photo: "rahul.jpg" },
			{ Name: "Ankur", Type: "Groomsmen", Photo: "ankur.jpg" },
			{ Name: "", Type: "Bridesmaid", Photo: "bridesmaid-1.jpg" },
			{ Name: "Mary Dell", Type: "Bridesmaid", Photo: "bridesmaid-2.jpg" },
			{ Name: "Alicia Brean", Type: "Bridesmaid", Photo: "bridesmaid-3.jpg" },
			{ Name: "Angel Worth", Type: "Bridesmaid", Photo: "bridesmaid-4.jpg" }
		];
		return (
			<section className="ftco-section" id="people-section">
				<div className="container-fluid px-md-5">
					<div className="row justify-content-center pb-5">
						<div className="col-md-12 text-center heading-section ftco-animate">
							<span className="clone"></span>
							<h2 className="mb-3">Family &amp; Friends</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="carousel-friends owl-carousel ftco-owl ftco-animate">
								{
									peoples.map((x, i) => {
										return (
											<div key={i} className="item">
												<div className="people text-center">
													<div className="img" style={{ "backgroundImage": `url(${'public/images/' + x.Photo})` }}></div>
													<div className="text">
														<h3>{x.Name}</h3>
														<span>{x.Type}</span>
													</div>
												</div>
											</div>
										)
									})
								}

							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
	showModal = _ => {
		$("#myModal").show();
	}
	hideModal = _ => {
		$("#myModal").hide();
	}
	render() {
		const Gallery = this.gallery;
		const FriendsAndFamily = this.familyAndFriends;
		const SweetMessages = this.sweetMessages;
		return (
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

				<section id="home" className="video-hero js-fullheight" style={{ "height": "700px", "backgroundImage": `url(${'public/images/bg_1.jpg'})`, "backgroundSize": "cover", "backgroundPosition": "top center" }} data-stellar-background-ratio="0.5">
					<div className="overlay"></div>
					<a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Mjjw19B7rMk?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&showinfo=0',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}"></a>
					<a className="player" style={{display: "none"}} data-property="{videoURL:'https://youtu.be/49ipG99rR5w?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&showinfo=0',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:false, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}"></a>
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
											<div className="img d-flex align-self-stretch align-items-center" style={{ "backgroundImage": `url(${'public/images/about.jpg'})` }}>
											</div>
										</div>
										<div className="col-md-6 py-md-5 text">
											<div className="py-md-4">
												<div className="row justify-content-start pb-3">
													<div className="col-md-12 ftco-animate p-4 p-lg-5 text-center">
														<span className="subheading mb-4">Join us to celebrate <br />the wedding day of</span>
														<h2 className="mb-4">Sankalp <span>&amp;</span> Khushbu</h2>
														<span className="icon flaticon-rose-variant-outline-with-vines"></span>
														<span className="subheading">Which is celebration on</span>
														<p className="time mb-4"><span>March | 2 | 2020</span></p>
														<span className="subheading mb-5">Starting at 7:00 <br /> in the evening</span>
														<span className="subheading mb-5">Near By Sports Club, Lukarganj <br /> in Prayagraj, Uttar Pradesh</span>
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
					<div className="overlay-top" style={{ "backgroundImage": `url(${'public/images/top-bg.jpg'})` }}></div>
					<div className="overlay-bottom" style={{ "backgroundImage": `url(${'public/images/bottom-bg.jpg'})` }}></div>
					<div className="container">
						<div className="row justify-content-center pb-5">
							<div className="col-md-12 text-center heading-section ftco-animate">
								<span className="clone"></span>
								<h2 className="mb-3">Groom &amp; Bride</h2>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-md-10">
								<div className="row">
									<div className="col-md-6 text-center d-flex align-items-stretch">
										<div className="bride-groom ftco-animate">
											<div className="img" style={{ "backgroundImage": `url(${'public/images/groom.jpg'})` }}></div>
											<div className="text mt-4 px-4">
												<h2>Sankalp</h2>
												<p>Far far away, behind the word mountains, far from the state Uttar Pradesh and Prayagraj, there live the blind texts. Separated they live in Bangalore right at the coast of the Semantics, a large Silicon Valley of India.</p>
											</div>
										</div>
									</div>
									<div className="col-md-6 text-center d-flex align-items-stretch">
										<div className="bride-groom ftco-animate">
											<div className="img" style={{ "backgroundImage": `url(${'public/images/bride.jpg'})` }}></div>
											<div className="text mt-4 px-4">
												<h2>Khushbu</h2>
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
								<span className="clone"></span>
								<h2 className="mb-3">Love Story</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<ul className="timeline animate-box">
									<li className="animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/couple-1.jpg'})` }}></div>
										<div className="timeline-panel ftco-animate text-md-right">
											<div className="overlay"></div>
											<div className="timeline-heading">
												<span className="date">April 27, 2019</span>
												<h3 className="timeline-title">First We Meet</h3>
											</div>
											<div className="timeline-body">
												<p>Some people meet online, others through friends, some at work, and a handful during college but ours is like MOM DAD NE BANA DI JODI. Far far away, from the state of UP and CG, journey begins with meeting as a stranger to feeling like a SOUL MATE.</p>
											</div>
										</div>
									</li>
									<li className="timeline-inverted animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/couple-2.jpg'})` }}></div>
										<div className="timeline-panel ftco-animate">
											<div className="overlay overlay-2"></div>
											<div className="timeline-heading">
												<span className="date">July 13, 2019</span>
												<h3 className="timeline-title">First Date</h3>
											</div>
											<div className="timeline-body">
												<p>This was elegant second meet to know more and express more. The perfect date in which everything was surprised and different, but at the end of it, all you want is to see them again .</p>
											</div>
										</div>
									</li>
									<li className="animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/couple-3.jpg'})` }}></div>
										<div className="timeline-panel ftco-animate text-md-right">
											<div className="overlay"></div>
											<div className="timeline-heading">
												<span className="date">September. 29, 2019</span>
												<h3 className="timeline-title">In A Relationship</h3>
											</div>
											<div className="timeline-body">
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
											</div>
										</div>
									</li>
									<li className="timeline-inverted animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/couple-4.jpg'})` }}></div>
										<div className="timeline-panel ftco-animate">
											<div className="overlay overlay-2"></div>
											<div className="timeline-heading">
												<span className="date">March 1, 2020</span>
												<h3 className="timeline-title">We're Engaged</h3>
											</div>
											<div className="timeline-body">
												<p>Love is just a word until someone comes along and gives it meaning. So this is the day we are waiting to cherish our whole life. A journey from courtship to tying a knot to start a new life .</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<SweetMessages />
				<FriendsAndFamily />
				<section className="ftco-section bg-light" id="when-where-section">
					<div className="container">
						<div className="row justify-content-center pb-5">
							<div className="col-md-12 text-center heading-section ftco-animate">
								<span className="clone"></span>
								<h2 className="mb-3">Place &amp; Time</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 ftco-animate">
								<div className="place img" style={{ "backgroundImage": `url(${'public/images/place-1.jpg'})` }}>
									<div className="text text-center">
										<span className="icon flaticon-reception-bell"></span>
										<h3>The Reception</h3>
										<p><span>Saturday, 28, 2019</span><br /><span>02:00 pm-10:00 pm</span></p>
										<p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
										<p><a href="#">+0 (123) 456 78 910</a></p>
										<p><span className="btn-custom" onClick={this.showModal}>See Map</span></p>
									</div>
								</div>
							</div>
							<div className="col-md-4 ftco-animate">
								<div className="place img" style={{ "backgroundImage": `url(${'public/images/place-2.jpg'})` }}>
									<div className="text text-center">
										<span className="icon flaticon-wedding-kiss"></span>
										<h3>The Ceremony</h3>
										<p><span>Saturday, 28, 2019</span><br /><span>02:00 pm-10:00 pm</span></p>
										<p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
										<p><a href="#">+0 (123) 456 78 910</a></p>
										<p><span className="btn-custom" onClick={this.showModal}>See Map</span></p>
									</div>
								</div>
							</div>
							<div className="col-md-4 ftco-animate">
								<div className="place img" style={{ "backgroundImage": `url(${'public/images/place-3.jpg'})` }}>
									<div className="text text-center">
										<span className="icon flaticon-cake"></span>
										<h3>The Party</h3>
										<p><span>Saturday, 28, 2019</span><br /><span>02:00 pm-10:00 pm</span></p>
										<p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
										<p><a href="#">+0 (123) 456 78 910</a></p>
										<p><span className="btn-custom" onClick={this.showModal}>See Map</span></p>
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
								<span className="clone"></span>
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
										<li className="ftco-animate"><a href="https://twitter.com/sankalp_27" target="_blank"><span className="icon-twitter"></span></a></li>
										<li className="ftco-animate"><a href="https://www.facebook.com/sankalptechno" target="_blank"><span className="icon-facebook"></span></a></li>
										<li className="ftco-animate"><a href="https://www.instagram.com/lifeofsankalp/" target="_blank"><span className="icon-instagram"></span></a></li>
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
											<li><a href="https://goo.gl/maps/AZCemMzsejHPXdGJA"> <span className="icon icon-map-marker"></span><span className="text">Lukerganj, Prayagraj , Uttar Pradesh </span></a></li>
											<li><a href="tel:+919451852666"><span className="icon icon-phone"></span><span className="text">+91-9451852666</span></a></li>
											<li><a href="mailto:sankalpn27@live.com"><span className="icon icon-envelope pr-4"></span><span className="text">sankalpn27@live.com</span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center">
								<p>
									Copyright &copy;{new Date().getFullYear()} All rights reserved | Developed <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://www.sankalpsoftwares.com" target="_blank">Sankalp</a>
								</p>
							</div>
						</div>
					</div>
				</footer>
				<div className="modal" id="myModal">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Prayag HoliDay</h4>
								<button type="button" className="close" onClick={this.hideModal} data-dismiss="modal">&times;</button>
							</div>
							<div className="modal-body">
								<div className="embed-responsive embed-responsive-16by9">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8894981070034!2d81.81341581433261!3d25.44195762797164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb2ebfffffff%3A0xf30aded4ad1f2258!2sprayag%20holiday!5e0!3m2!1sen!2sin!4v1575011118460!5m2!1sen!2sin" frameBorder="0" style={{ "border": 0 }} allowFullScreen=""></iframe>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" onClick={this.hideModal} data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}