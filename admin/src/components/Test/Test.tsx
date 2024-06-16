import React from 'react';
import './Test.scss'
import { TabView, TabPanel } from 'primereact/tabview';
import CreateTest from './CreateTest';

const Test = () => {
    return (
        <div>
            <div className="card">
                <TabView>
                    <TabPanel header="Header I">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Header II">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                    <TabPanel header="Header III">
                        <p className="m-0">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quaerat temporibus sunt nostrum rem aspernatur molestiae autem placeat possimus iure. Pariatur quisquam delectus dolorem. Non ratione libero adipisci debitis nobis?
                        </p>
                    </TabPanel>
                    <TabPanel header="Create Test">
                        <p className="m-0">
                            <CreateTest />
                        </p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default Test