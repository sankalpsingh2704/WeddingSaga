import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestSaveRspv } from '../actions/rsvpAction';
import { EVENT_TIME, BRIDE_NAME, GROOM_NAME, CELIBRATED_DATE, STARTING_AT, DESTINATION, ABOUT_GROOM, ABOUT_BRIDE, TIME_LINE, GROOM_PHOTO, BRIDE_PHOTO, GROOM_BRIDE_PHOTO, GOOGLE_MAP_EMBED, CONTACT, GOOGLE_MAP_URL, EMAIL, SWEET_MESSAGES, FAMILY_FRIENDS, GALLERY, PLACE_TIME, FINAL_WORDS, FINAL_WORDS_TITLE, GOOGLE_MAP_ADDRESS, TWITTER_LINK, FACEBOOK_LINK, INSTAGRAM_LINK } from '../constants/index';

class Wedding extends React.Component {
	constructor(props) {
		super(props);
		this.request = {
			name: "",
			email: "",
			guest: "",
			message: ""
		}
	}
	gallery = _ => {
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
							GALLERY.map((x, i) =>
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
									SWEET_MESSAGES.map((x, i) => {
										return (
											<div className="item" key={i}>
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
									FAMILY_FRIENDS.map((x, i) => {
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

	thanks = _ => {
		return (
			<section className="ftco-section bg-secondary" id="rsvp-section">
				<div className="container">
					<div className="row justify-content-center pb-5">
						<div className="col-md-12 text-center heading-section">
							<span className="clone"></span>
							<h2 className="mb-3">Thanks for your response !</h2>
						</div>
					</div>
				</div>
			</section>
		)
	}

	rsvp = _ => {
		return (
			<section className="ftco-section bg-secondary" id="rsvp-section">
				<div className="container">
					<div className="row justify-content-center pb-5">
						<div className="col-md-12 text-center heading-section ftco-animate">
							<span className="clone"></span>
							<h2 className="mb-3">Are You Attending?</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-7">
							<form action="#" className="rsvp-form ftco-animate">
								<div className="">
									<div className="form-group">
										<input type="text" className="form-control" onChange={e => this.request.name = e.target.value} placeholder="Name" />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" onChange={e => this.request.email = e.target.value} placeholder="Your email" />
									</div>
								</div>
								<div className="">
									<div className="form-group">
										<div className="form-field">
											<div className="select-wrap">
												<div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-down"></span></div>
												<select name="" id="guest" className="form-control" onChange={e => this.request.guest = e.target.value}>
													<option value="">Guest</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="form-group">
										<textarea name="message" id="" cols="30" rows="2" className="form-control" onChange={e => this.request.message = e.target.value} placeholder="Message"></textarea>
									</div>
									<div className="form-group">
										<input type="button" onClick={_ => { this.props.requestSaveRspv(this.request) }} value="I am attending" className="btn btn-primary py-3 px-4" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}
	componentDidMount(){
		window.document.getElementById('thousand').play();
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
		const Rsvp = this.rsvp;
		const Thanks = this.thanks;
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
								<li className="nav-item"><a href="#gallery-section" className="nav-link"><span>Gallery</span></a></li>
								<li className="nav-item"><a href="#rsvp-section" className="nav-link"><span>RSVP</span></a></li>
							</ul>
						</div>
					</div>
				</nav>
				<section id="home" className="video-hero js-fullheight" style={{ "height": "700px", "backgroundImage": `url(${'public/images/bg_1.jpg'})`, "backgroundSize": "cover", "backgroundPosition": "top center" }} data-stellar-background-ratio="0.5">
					<div className="overlay"></div>
					<a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Mjjw19B7rMk?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&origin=https://sankalpsingh2704.github.io/WeddingSaga/',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}"></a>
					<audio id="thousand" autoPlay loop src="public/music/thousand.mp3" type="audio/mp3" style={{ visibility: "hidden" }} />
					<div className="container">
						<div className="row js-fullheight justify-content-center d-flex align-items-center">
							<div className="col-md-12">
								<div className="text text-center">
									<div className="icon">
										<span className="flaticon-rose-outline-variant-with-vines-and-leaves"></span>
									</div>
									<input type="hidden" value={EVENT_TIME} id="eventTime" />
            						<span className="subheading">The Wedding of</span>
									<h1>{GROOM_NAME + ' & '+ BRIDE_NAME}</h1>
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
											<div className="img d-flex align-self-stretch align-items-center" style={{ "backgroundImage": `url(${'public/images/'+GROOM_BRIDE_PHOTO})` }}>
											</div>
										</div>
										<div className="col-md-6 py-md-5 text">
											<div className="py-md-4">
												<div className="row justify-content-start pb-3">
													<div className="col-md-12 ftco-animate p-4 p-lg-5 text-center">
														<span className="subheading mb-4">Join us to celebrate <br />the wedding day of</span>
														<h2 className="mb-4">{GROOM_NAME + ' & '+ BRIDE_NAME}</h2>
														<span className="icon flaticon-rose-variant-outline-with-vines"></span>
														<span className="subheading">Which is celebration on</span>
														<p className="time mb-4"><span>{CELIBRATED_DATE}</span></p>
														<span className="subheading mb-5">{STARTING_AT}<br /> in the evening</span>
														<span className="subheading mb-5">{DESTINATION[0]} <br />{DESTINATION[1]}</span>
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
											<div className="img" style={{ "backgroundImage": `url(${'public/images/'+GROOM_PHOTO})` }}></div>
											<div className="text mt-4 px-4">
												<h2>{GROOM_NAME}</h2>
												<p>{ABOUT_GROOM}</p>
											</div>
										</div>
									</div>
									<div className="col-md-6 text-center d-flex align-items-stretch">
										<div className="bride-groom ftco-animate">
											<div className="img" style={{ "backgroundImage": `url(${'public/images/'+BRIDE_PHOTO})` }}></div>
											<div className="text mt-4 px-4">
												<h2>{BRIDE_NAME}</h2>
												<p>{ABOUT_BRIDE}</p>
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
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/'+TIME_LINE[0].Photo})` }}></div>
										<div className="timeline-panel ftco-animate text-md-right">
											<div className="overlay"></div>
											<div className="timeline-heading">
												<span className="date">{TIME_LINE[0].Date}</span>
												<h3 className="timeline-title">{TIME_LINE[0].Title}</h3>
											</div>
											<div className="timeline-body">
												<p>{TIME_LINE[0].Description}</p>
											</div>
										</div>
									</li>
									<li className="timeline-inverted animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/'+TIME_LINE[1].Photo})` }}></div>
										<div className="timeline-panel ftco-animate">
											<div className="overlay overlay-2"></div>
											<div className="timeline-heading">
												<span className="date">{TIME_LINE[1].Date}</span>
												<h3 className="timeline-title">{TIME_LINE[1].Title}</h3>
											</div>
											<div className="timeline-body">
												<p>{TIME_LINE[1].Description}</p>
											</div>
										</div>
									</li>
									<li className="animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/'+TIME_LINE[2].Photo})` }}></div>
										<div className="timeline-panel ftco-animate text-md-right">
											<div className="overlay"></div>
											<div className="timeline-heading">
												<span className="date">{TIME_LINE[2].Date}</span>
												<h3 className="timeline-title">{TIME_LINE[2].Title}</h3>
											</div>
											<div className="timeline-body">
												<p>{TIME_LINE[2].Description}</p>
											</div>
										</div>
									</li>
									<li className="timeline-inverted animate-box">
										<div className="timeline-badge" style={{ "backgroundImage": `url(${'public/images/'+TIME_LINE[3].Photo})` }}></div>
										<div className="timeline-panel ftco-animate">
											<div className="overlay overlay-2"></div>
											<div className="timeline-heading">
												<span className="date">{TIME_LINE[3].Date}</span>
												<h3 className="timeline-title">{TIME_LINE[3].Title}</h3>
											</div>
											<div className="timeline-body">
												<p>{TIME_LINE[3].Description}</p>
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
							{
								PLACE_TIME.map((x,i)=>
								<div className="col-md-4 ftco-animate">
									<div className="place img" style={{ "backgroundImage": `url(${'public/images/'+x.Place})` }}>
										<div className="text text-center">
											<span className={`${'icon '+ x.FlatIcon}`}></span>
											<h3>{x.Title}</h3>
											<p><span>{x.Day}</span><br /><span>{x.Time}</span></p>
											<p><span>{x.Address}</span></p>
											<p><a href={`${'tel:'+CONTACT}`}>{CONTACT}</a></p>
											<p><span className="btn-custom" onClick={this.showModal}>See Map</span></p>
										</div>
									</div>
								</div>
								)
							}
						</div>
					</div>
				</section>
				<Gallery />
				{
					this.props.submitState.response === "success" ? <Thanks />: <Rsvp/>
				}
				<footer className="ftco-footer ftco-section">
					<div className="overlay"></div>
					<div className="container">
						<div className="row mb-5">
							<div className="col-md">
								<div className="ftco-footer-widget mb-4">
									<h2 className="ftco-heading-2">{FINAL_WORDS_TITLE}</h2>
									<p>{FINAL_WORDS}</p>
									<ul className="ftco-footer-social list-unstyled mt-5">
										<li className="ftco-animate"><a href={TWITTER_LINK} target="_blank"><span className="icon-twitter"></span></a></li>
										<li className="ftco-animate"><a href={FACEBOOK_LINK} target="_blank"><span className="icon-facebook"></span></a></li>
										<li className="ftco-animate"><a href={INSTAGRAM_LINK} target="_blank"><span className="icon-instagram"></span></a></li>
									</ul>
								</div>
							</div>
							<div className="col-md">
								<div className="ftco-footer-widget mb-4 ml-md-4">
									<h2 className="ftco-heading-2">Links</h2>
									<ul className="list-unstyled">
										<li><a href="#home"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
										<li><a href="#groom-bride-section"><span className="icon-long-arrow-right mr-2"></span>Groom &amp; Bride</a></li>
										<li><a href="#lovestory-section"><span className="icon-long-arrow-right mr-2"></span>Story</a></li>
										<li><a href="#greeting-section"><span className="icon-long-arrow-right mr-2"></span>Greetings</a></li>
										<li><a href="#when-where-section"><span className="icon-long-arrow-right mr-2"></span>Where &amp; When</a></li>
										<li><a href="#rsvp-section"><span className="icon-long-arrow-right mr-2"></span>RSVP</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md">
								<div className="ftco-footer-widget mb-4">
									<h2 className="ftco-heading-2">Services</h2>
									<ul className="list-unstyled">
										<li><a href={`${'mailto:'+EMAIL}`}><span className="icon-long-arrow-right mr-2"></span>Organizer</a></li>
										<li><a href={GOOGLE_MAP_URL}><span className="icon-long-arrow-right mr-2"></span>Venue</a></li>
										<li><a href="#when-where-section"><span className="icon-long-arrow-right mr-2"></span>Wedding Ceremony</a></li>
										<li><a href="#people-section"><span className="icon-long-arrow-right mr-2"></span>People</a></li>
										<li><a href="#gallery-section"><span className="icon-long-arrow-right mr-2"></span>Gallery</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md">
								<div className="ftco-footer-widget mb-4">
									<h2 className="ftco-heading-2">Have a Questions?</h2>
									<div className="block-23 mb-3">
										<ul>
											<li><a href={GOOGLE_MAP_URL}> <span className="icon icon-map-marker"></span><span className="text">{GOOGLE_MAP_ADDRESS} </span></a></li>
											<li><a href={`${'tel:'+CONTACT}`}><span className="icon icon-phone"></span><span className="text">{CONTACT}</span></a></li>
											<li><a href={`${'mailto:'+EMAIL}`}><span className="icon icon-envelope pr-4"></span><span className="text">{EMAIL}</span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center">
								<p>
									Copyright &copy;{new Date().getFullYear()} All rights reserved | Developed <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="http://sankalpsoftwares.blogspot.in/" target="_blank">Sankalp</a>
								</p>
							</div>
						</div>
					</div>
				</footer>
				<div className="modal" id="myModal">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">{DESTINATION[0]}</h4>
								<button type="button" className="close" onClick={this.hideModal} data-dismiss="modal">&times;</button>
							</div>
							<div className="modal-body">
								<div className="embed-responsive embed-responsive-16by9">
									<iframe src={GOOGLE_MAP_EMBED} frameBorder="0" style={{ "border": 0 }} allowFullScreen=""></iframe>
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
const mapStateToProps = (state, ownProps) => {
	return {
		submitState: state.rsvp
	}
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators(
			{ requestSaveRspv }
			, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Wedding);