import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">A React Router Example</h1>
                        <p className="lead">
                            This is an example of a website leveraging React Router Version 4!.
                    </p>
                        <a className="btn btn-primary btn-lg"
                            href="https://github.com/SpaceFozzy/react-router-example/blob/master/README.md"
                            role="button"
                            target="_blank"
                        >
                            View Repository Readme
                    </a>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dui quis sem fringilla, sit amet tempor massa maximus. Sed sit amet iaculis enim. Proin facilisis egestas ante, eget aliquet massa placerat id. Vestibulum et ante vitae dolor hendrerit fermentum. Sed porttitor pretium finibus. Duis vehicula quis erat vel posuere. Aliquam quis pellentesque lorem. Vestibulum ac est vitae lacus tempus lacinia ut eget ante. Donec porttitor, sapien et commodo tincidunt, neque justo venenatis ex, molestie tincidunt nibh elit ac leo. In scelerisque tellus nec risus lacinia, id tincidunt enim ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tincidunt ornare nunc, vel vulputate augue sodales in. Morbi luctus ultricies nibh id laoreet. Proin dignissim erat libero, et suscipit lacus blandit et. Praesent lacinia turpis quis felis bibendum, quis dapibus lectus iaculis. Curabitur rhoncus, risus sed feugiat finibus, nunc risus vulputate erat, in interdum risus ex in dui.
                            </p>
                            <p>
                                Vivamus consectetur commodo nulla ut blandit. Nullam pharetra accumsan facilisis. Pellentesque molestie lacus ut lacus vulputate, in fringilla lectus rhoncus. Donec sit amet diam et nisi rutrum feugiat et nec sem. Phasellus tincidunt tincidunt condimentum. Vestibulum vitae sodales velit.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <p>
                                Maecenas ultrices est est, vel egestas ante placerat a. Donec a mattis erat. Fusce ac ligula vulputate libero suscipit varius nec at odio. Duis pellentesque felis sit amet nunc mattis, sit amet tempor est iaculis. Integer sollicitudin ut erat sit amet efficitur. Maecenas id viverra lectus. Duis mollis, mi ut porttitor lobortis, dolor tortor fringilla risus, sed viverra odio dolor sit amet urna. Nam accumsan id mi non porttitor.
                            </p>
                            <p>
                                Morbi nec ante orci. Fusce molestie arcu consequat, molestie mauris vitae, ultricies sapien. In ac orci id quam gravida convallis at vel tortor. Sed ac ante aliquet sapien varius tristique. Donec at leo dapibus, efficitur velit eget, ornare purus. Aliquam vulputate molestie enim, vestibulum varius quam pharetra et. Integer varius turpis erat, nec accumsan elit venenatis eget. Quisque a tincidunt arcu. Nulla malesuada libero sit amet leo vestibulum, ut facilisis risus placerat.
                            </p>
                        </div>

                        <div className="col-sm-4">
                            <p>
                                Mauris auctor placerat elementum. Cras bibendum, ante quis convallis bibendum, nisl nisl sagittis eros, sit amet blandit odio mi sed lacus. Proin ullamcorper felis nisi, non tincidunt sem volutpat in. Nulla dapibus leo quis facilisis porta. Nunc vehicula lacus ultricies odio finibus consequat. Fusce tincidunt mollis ex vitae tempus. Vestibulum ac diam eu sem vulputate placerat in nec tellus. Duis pellentesque vestibulum velit, vel tincidunt dolor finibus ut. Fusce non volutpat elit. Integer blandit velit dolor, at consequat nisi sodales ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                            <p>
                                Pellentesque ultricies felis at facilisis vehicula. Praesent sed massa sed sapien pharetra faucibus. Etiam molestie lacus ut tempor porttitor. Fusce ultricies nec mi a consequat. Integer mauris mauris, vulputate non arcu sed, condimentum rutrum tortor. Suspendisse potenti. Morbi quis sem eget nunc pretium dapibus luctus nec ipsum. Phasellus interdum orci maximus, dapibus augue at, fermentum leo. Proin rhoncus elit elementum imperdiet dapibus. Ut sollicitudin congue sapien eu lobortis. 
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeComponent;