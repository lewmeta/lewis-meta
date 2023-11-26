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
                        .title('Home Conent')
                        .items([
                            S.documentTypeListItem("navbar")
                                .title('Navbar Content'),
                            S.documentTypeListItem("homeAbout")
                                .title('Home About'),
                        ])
                ),
            S.listItem()
                .title("About Me")
                .child(
                    S.list()
                        .title('Abouts')
                        .items([
                            // S.documentTypeListItem("aboutusIntro")
                                // .title('ABOUTUS INTRO'),
                        ])
                ),
            S.listItem()
                .title('Articles Page ')
                .icon(() => '📄')
                .child(
                    S.list()
                        .title('Blog Content')
                        .items([
                            S.documentTypeListItem("post")
                                .title('Create Articles'),
                        ])
                ),
            S.listItem()
                .title("Our Projects")
                .child(
                    S.list()
                        .title('Projects')
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
                            S.documentTypeListItem("contactInfo")
                                .title('Contact Info '),
                            S.documentTypeListItem("contactMap")
                                .title('Contact Map'),
                        ])
                ),
        ]);
