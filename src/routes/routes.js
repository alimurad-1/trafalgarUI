import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import OurApps from "../components/OurApps";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Hero} />
    <Route path="/about_us" component={AboutUs} />
    <Route path="/services" component={Services} />
    <Route path="/our_apps" component={OurApps} />
    <Route path="/testimonial" component={Testimonial} />
    <Route path="/blog" component={Blog} />
  </Switch>
);

export default Routes;
