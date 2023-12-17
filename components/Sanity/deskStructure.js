import { schemaTypes } from '../../schemas';
import { _responsive } from '@sanity/ui'

export const myStructure = (S) =>
    S.list()
        .title('Lewis Meta')
        .items([...S.documentTypeListItems().reverse()])
        .items([
            S.listItem()
                .title("Home Page")
                .child(
                    S.list()
                        .title('Home Content')
                        .items([
                            S.documentTypeListItem("home")
                                .title('Create Home Page'),
                        ])
                ),
            S.listItem()
                .title("About Me Page")
                .child(
                    S.list()
                        .title('About Me')
                        .items([
                            S.documentTypeListItem("aboutIntro")
                                .title('Creat AboutMe '),
                            S.documentTypeListItem("achievements")
                                .title('Creat your Achievements '),
                            S.documentTypeListItem("mystory")
                                .title('Creat your story '),
                        ])
                ),
            S.listItem()
                .title("Credentials Page")
                .child(
                    S.list()
                        .title('More about me')
                        .items([
                            S.documentTypeListItem("credentials")
                                .title('Creat Credentials '),
                            S.documentTypeListItem("experience")
                                .title('Creat Experiences '),
                            S.documentTypeListItem("education")
                                .title('Creat your Education '),
                        ])
                ),
            S.listItem()
                .title('Articles Page ')
                .child(
                    S.list()
                        .title('Blog Content')
                        .items([
                            S.documentTypeListItem("post")
                                .title('Create Articles'),
                        ])
                ),
            S.listItem()
                .title('My Services Page ')
                .child(
                    S.list()
                        .title('My Services')
                        .items([
                            S.documentTypeListItem("myservices")
                                .title('Create Services'),
                        ])
                ),
            S.listItem()
                .title("Projects Page")
                .child(
                    S.list()
                        .title('Your Projects')
                        .items([
                            S.documentTypeListItem("project")
                                .title('Create Projects'),
                        ])
                ),

            S.listItem()
                .title("Contact Page")
                .child(
                    S.list()
                        .title('Contact Information')
                        .items([
                            // S.documentTypeListItem("contactInfo")
                            //     .title('Contact Info '),
                            // S.documentTypeListItem("contactMap")
                            //     .title('Contact Map'),
                        ])
                ),
        ]);
