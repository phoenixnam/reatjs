import React from 'react';
import './Css.css'

const Content = () => {
  return (
    <div className="app-content content">
      <div className="content-wrapper">
        <div className="content-wrapper-before"></div>
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="row match-height">
            <div className="col-12">
              <div className="">
                <div id="gradient-line-chart1" className="height-250 GradientlineShadow1"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card pull-up ecom-card-1 bg-white">
                <div className="card-content ecom-card2 height-180">
                  <h5 className="text-muted danger position-absolute p-1">Progress Stats</h5>
                  <div>
                    <i className="ft-pie-chart danger font-large-1 float-right p-1"></i>
                  </div>
                  <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                    <div id="progress-stats-bar-chart"></div>
                    <div id="progress-stats-line-chart" className="progress-stats-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card pull-up ecom-card-1 bg-white">
                <div className="card-content ecom-card2 height-180">
                  <h5 className="text-muted info position-absolute p-1">Activity Stats</h5>
                  <div>
                    <i className="ft-activity info font-large-1 float-right p-1"></i>
                  </div>
                  <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                    <div id="progress-stats-bar-chart1"></div>
                    <div id="progress-stats-line-chart1" className="progress-stats-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card pull-up ecom-card-1 bg-white">
                <div className="card-content ecom-card2 height-180">
                  <h5 className="text-muted warning position-absolute p-1">Sales Stats</h5>
                  <div>
                    <i className="ft-shopping-cart warning font-large-1 float-right p-1"></i>
                  </div>
                  <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                    <div id="progress-stats-bar-chart2"></div>
                    <div id="progress-stats-line-chart2" className="progress-stats-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eCommerce statistic */}
          <div className="row match-height">
            <div className="col-xl-4 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title" id="heading-multiple-thumbnails">Multiple Thumbnail</h4>
                  <a className="heading-elements-toggle">
                    <i className="la la-ellipsis-v font-medium-3"></i>
                  </a>
                  <div className="heading-elements">
                    <span className="avatar">
                      <img src="assets/images/portrait/small/avatar-s-14.png" alt="avatar" height="38" width="38" />
                    </span>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div id="carousel-example-caption" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carousel-example-caption" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-caption" data-slide-to="1"></li>
                        <li data-target="#carousel-example-caption" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img src="assets/images/slider/06.jpg" alt="First slide" className="img-fluid" />
                          <div className="carousel-caption">
                            <h3>First Slide Title</h3>
                            <p>This is the caption for the first slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src="assets/images/slider/07.jpg" alt="Second slide" className="img-fluid" />
                          <div className="carousel-caption">
                            <h3>Second Slide Title</h3>
                            <p>This is the caption for the second slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src="assets/images/slider/08.jpg" alt="Third slide" className="img-fluid" />
                          <div className="carousel-caption">
                            <h3>Third Slide Title</h3>
                            <p>This is the caption for the third slide.</p>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carousel-example-caption" role="button" data-slide="prev">
                        <span className="la la-angle-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carousel-example-caption" role="button" data-slide="next">
                        <span className="la la-angle-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End eCommerce statistic */}
        </div>
      </div>
    </div>
  );
};

export default Content;
