
var axios = require('axios');
var config = require('./config');

var timer = 0;



login = async (username, password) => {
    const res = await axios({
        method: 'get',
        url: '/users/login/admin',
        baseURL: config.baseURL,
        params: {
            username: username,
            password: password,
        },
    });

    const logindata = res.data.data;
    timer++;
    return logindata;
}


getSubject = async (logindata) => {
    const res = await axios({
        method: 'get',
        url: '/subjects/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
    var subjectidArray = [];
    for (let i = 0; i < res.data.data.length; i += 1) {
        subjectidArray.push(res.data.data[i]._id)
    }
    timer++;
    return subjectidArray;
}


createSchool = async (logindata, name, subjectidArray) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/schools/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "adress": "这个是学校地址",
            // "badge": [
            //   {
            //     "uid": "rc-upload-1535611508070-5",
            //     "url": "84cb5307035888e8400e317ca5236436.jpg"
            //   }
            // ],
            "brief": "新建学校的简介",
            "createdSubjects": [],
            // "images": [
            //   {
            //     "uid": "rc-upload-1535611508070-5",
            //     "url": "84cb5307035888e8400e317ca5236436.jpg"
            //   }
            // ],
            "mobile": "15994545688",
            "name": name,
            "section": "小学-初中",
            "sectionTime": 5,
            "semesterDate": [
                "2018-08-01T00:57:20.985Z",
                "2018-09-29T00:57:20.985Z"
            ],
            "subject": subjectidArray,
            "username": "chushiguanliyuan",
            "password": "123456",

        }
    });
}



updateSchool = async (logindata, subjectidArray, schoolid, originAdminid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/schools/' + schoolid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {

            "adress": "湖北省武汉市洪山区312号双恒创业园",
            // "badge": [
            //   {
            //     "uid": "rc-upload-1535299803336-5",
            //     "url": "6c15ee96b31461a1061e61fe2eb756f9.jpg"
            //   }
            // ],
            "brief": "学校简介",
            // "images": [
            //   {
            // //     "uid": "rc-upload-1535299803336-3",
            // //     "url": "95d06dd93e375c5b6d9835e5b8b00522.jpg"
            // //   }
            // ],
            "mobile": "15994554547",
            "name": "这是一个被修改了的自动化新建的通产学校",
            "section": "小学-初中",
            "sectionTime": 10,
            "semesterDate": [
                "2018-08-01T08:46:42.464Z",
                "2019-01-31T08:46:42.464Z"
            ],
            "staff": [],
            "subject": subjectidArray,
            "originAdmin":
            {
                "mobile": "15994545688",
                "password": "123456",
                "username": "chushiguanliyuan",
                "_id": originAdminid,
            },
            "username": "chaojiX",
            "password": "123456",
            "_id": schoolid,
        }
    })
}

getSchool = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/schools/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}


getGrade = async (logindata) => {

    const res = await axios({
        method: 'get',
        url: '/grades/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
    var gradeidArray = [];
    for (let i = 0; i < res.data.data.length; i += 1) {
        gradeidArray.push(res.data.data[i]._id)
    }
    timer++;
    return gradeidArray;
}




createeBook = async (logindata, gradeidArray, subjectidArray) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/ebooks/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {

            "brief": "这是个电子课本简介",
            // "display": [
            //   {
            //     "uid": "rc-upload-1535338401315-4",
            //     "url": "ce9740db778083e39f9049de1a617edb.jpg"
            //   }
            // ],
            "grade": gradeidArray,
            "publisher": "华中出版社",
            "section": "小学",
            "semester": "next",
            "subjects": subjectidArray,
            "title": "自动化创建的电子书"

        }
    });
}


updateeBook = async (logindata, ebookitemid, gradeidArray, subjectidArray) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/ebooks/' + ebookitemid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {

            "brief": "这是个电子课本简介",
            // "display": [
            //   {
            //     "uid": "rc-upload-1535338401315-4",
            //     "url": "ce9740db778083e39f9049de1a617edb.jpg"
            //   }
            // ],

            "section": "小学",
            "grade": gradeidArray,
            "items": [],
            "pdfImages": [],
            "publisher": "华中出版社",
            "semester": "next",
            "subjects": subjectidArray,
            "title": "这是一个被自动化修改的电子书名",
        }
    });
}

geteBook = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/ebooks/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

importPDF = async (logindata, ebookitemid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/ebooks/' + '1bb2e6ca82948dc41d928cb904a1351a' + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "isPdf": true,
            "pdfUrl": "1bb2e6ca82948dc41d928cb904a1351a.pdf",
            "_id": ebookitemid,
        }
    });
}



createeBookmenu = async (logindata, ebookitemid, eBookmenuname) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/ebooks/menu/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "ebook": ebookitemid,
            "name": eBookmenuname,
        }
    });
}


createeBookchildmenu = async (logindata, ebookitemid, eBookmenuname, eBookmenuid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/ebooks/menu/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "ebook": ebookitemid,
            "name": eBookmenuname,
            "parentId": eBookmenuid,
        }
    });
}

updateeBookmenu = async (logindata, eBookmenuid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/ebooks/menu/' + eBookmenuid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "displayPage": "1",
            "name": "自动化修改的章节名",
            "startPage": "100",
            "_id": eBookmenuid,
        }
    });
}


geteBookmenu = async (logindata, ebookitemid) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/ebooks/' + ebookitemid + '/menu//admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

geteBookchildmenu = async (logindata, ebookitemid, eBookmenuid) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/ebooks/' + ebookitemid + '/menu/' + eBookmenuid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}




createeBookResourcemenu = async (logindata, ebookitemid, ebookResourcemenuname) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/resource/menu/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "ebook": ebookitemid,
            "name": ebookResourcemenuname,
        }
    });
}


createeBookResourcechildmenu = async (logindata, ebookResourcemenuname, eBookResourcemenuid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/resource/menu/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "name": ebookResourcemenuname,
            "parentId": eBookResourcemenuid,
        }
    });
}

updateeBookResourcemenu = async (logindata, eBookResourcemenuid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/resource/menu/' + eBookResourcemenuid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "name": "自动化修改的资源目录名",
            "_id": eBookResourcemenuid,
        }
    });
}


updateResourcetomenu = async (logindata, eBookResourcemenuid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/resource/menu/' + eBookResourcemenuid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "resources": [
                {
                    "uid": "rc-upload-1535355733207-5",
                    "url": "d7dd43efebcec59d1ca22698b8be95c5.docx",
                    "fileName": "新建的文本文档",
                    "ext": "docx"
                }
            ],
            "name": "自动化创建的附件",
            "_id": eBookResourcemenuid
        }
    });
}



geteBookresourcemenu = async (logindata, ebookitemid) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/resource/' + ebookitemid + '/menu//admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

geteBookresourcechildmenu = async (logindata, ebookitemid, eBookResourcemenuid) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/resource/' + ebookitemid + '/menu/' + eBookResourcemenuid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}



getSublistfromResourcemanagement = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/subjects/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "stage": "1"
        }
    });
}

getKnowledgefromSubject = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/knowledge/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "stage": "1",
            "subjectId": "2"
        }
    });
}

getDocumentsViaKnowledgeId = async (logindata, KnowledgechildIdArray) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/documents/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "stage": "1",
            "subjectId": "2",
            "knowledgeId": KnowledgechildIdArray[0],
        }
    });
}



getVersionsfromSubject = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/versions/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "stage": "1",
            "subjectId": "2"
        }
    });
}



getBooksfromVersions = async (logindata, versionsIdArray) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/books/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "versionId": versionsIdArray[0],
        }
    });
}


getChaptersfromBookid = async (logindata, bookIdArray) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/chapters/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "bookId": bookIdArray[0],
        }
    });
}

getDocumentsViaChapterId = async (logindata, versionsIdArray, bookIdArray, ChapterchildIdArray) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/documents/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "stage": "1",
            "subjectId": "2",
            "versionId": versionsIdArray[0],
            "bookId": bookIdArray[0],
            "chapterId": ChapterchildIdArray[0],
        }
    });
}


getResouceDataViaitemId = async (logindata, itemIds) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/sj/items/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        params: {
            "itemIds": itemIds
        }
    });
}

AddDocumenttoBook = async (logindata, getResouceDataViaitemIdres, eBookmenuchildid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/cloud/resource/ebook/menu/' + eBookmenuchildid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: getResouceDataViaitemIdres,
    });
}


getuserid = async (logindata) => {
    timer++;
    const res = await axios({
        method: 'get',
        url: '/users/authorize/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
    var adminid = '';
    adminid = res.data.data.user._id;
    return adminid;

}


createSchedule = async (logindata, adminid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/schedules/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {

            "address": "武汉市新洲区旧街街问津书院",
            "eventType": "emergency",
            "fromTime": "2018-09-04 16:43",
            "toTime": "2018-09-04 16:45",
            "repeat": "5",
            "title": "自动化创建的日程",
            "users": [adminid]
        }
    });
}


updateSchedule = async (logindata, scheduleid, adminid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/schedules/' + scheduleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {

            "address": "武汉市新洲区旧街街问津书院",
            "eventType": "emergency",
            "fromTime": "2018-08-31 16:43",
            "toTime": "2018-08-31 16:45",
            "repeat": "5",
            "title": "自动化修改的日程",
            "users": [adminid],
        }
    });
}

geteSchedule = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/schedules/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}



createRole = async (logindata) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/roles/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "order": 3,
            "rolename": "自动化创建的角色"
        }
    });
}



updateRole = async (logindata, roleid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/roles/' + roleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "authorize": [],
            "order": 50,
            "rolename": "自动化修改的角色",
            "_id": roleid

        }
    });
}

getRole = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/roles/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

createUser = async (logindata, roleid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/info/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "mobile": "15689898866",
            "name": "自动化创建的用户",
            "password": "12345678",
            "role": roleid,
            "username": "autouserX",
            "info": {
                "gender": "男",
                "mobile": "15689898866",
                "name": "自动化创建的用户",
                "password": "12345678",
                "role": roleid,
                "username": "autouserX",
            }
        }
    });
}

updateUser = async (logindata, roleid, userid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/users/info/' + userid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {

            "gender": "男",
            "mobile": "15689898866",
            "name": "自动化修改的用户",
            "password": "123456789",
            "role": roleid,
            "username": "autouserX",
            "_id": userid,
            "info": {
                "gender": "男",
                "mobile": "15689898866",
                "name": "自动化修改的用户",
                "password": "123456789",
                "role": roleid,
                "username": "autouserX",
            }
        }
    });
}


getUser = async (logindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/users/info/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

updateAuthorization = async (logindata, roleid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/roles/' + roleid + '/authorization/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "roleAuthorizations": [
                "get_messages",
                "message_manage_checkAll",
                "get_schools",
                "create_school",
                "modify_school",
                "delete_school",
                "school_manage_checkAll",
                "get_classes",
                "create_class",
                "modify_class",
                "delete_class",
                "class_manage_checkAll",
                "get_user_realation",
                "create_user_realation",
                "modify_user_realation",
                "delete_user_realation",
                "user_realation_manage_checkAll",
                "get_timetables",
                "create_timetable",
                "modify_timetable",
                "delete_timetable",
                "timetable_manage_checkAll",
                "get_official_info",
                "put_official_info",
                "official_manage_checkAll",
                "get_slide_groups",
                "create_slide_group",
                "put_slide_group",
                "delete_slide_group",
                "slide_group_manage_checkAll",
                "get_slides",
                "create_slides",
                "put_slides",
                "delete_slides",
                "slides_manage_checkAll",
                "get_feature_groups",
                "create_feature_group",
                "put_feature_group",
                "delete_feature_group",
                "feature_group_manage_checkAll",
                "get_school_resources",
                "create_school_resource",
                "delete_school_resource",
                "school_resource_manage_checkAll",
                "get_portals",
                "create_portal",
                "put_portal",
                "delete_portal",
                "portal_manage_checkAll",
                "get_articles",
                "create_article",
                "put_article",
                "delete_article",
                "article_manage_checkAll",
                "get_my_resources",
                "create_my_resource",
                "delete_my_resource",
                "my_resource_manage_checkAll",
                "get_schedules",
                "create_schedule",
                "modify_schedule",
                "delete_schedule",
                "delete_schedule_removedDate",
                "schedule_manage_checkAll",
                "get_roles",
                "create_role",
                "modify_role",
                "delete_role",
                "role_manage_checkAll",
                "get_users",
                "create_user",
                "modify_user",
                "delete_user",
                "user_manage_checkAll",
                "put_role_authorization",
                "get_role_authorization",
                "create_message",
                "get_ebooks",
                "add_ebooks",
                "update_ebooks",
                "delete_ebooks",
                "ebook_manage_checkAll",
                "get_cloud_resources",
                "add_cloud_resources",
                "update_cloud_resources",
                "delete_cloud_resources",
                "cloud_resources_manage_checkAll",
            ]
        }
    });

}

//以下为指定权限用户的方法-------------------------------------------

createRolewithoutAuth = async (logindata) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/roles/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "order": 4,
            "rolename": "无权限的角色"
        }
    });
}


createUserwithoutAuth = async (logindata, roleid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/info/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "mobile": "15689898677",
            "name": "无权限角色下的用户",
            "password": "123456",
            "role": roleid,
            "username": "autouserXwithoutAuth",
            "info": {
                "gender": "男",
                "mobile": "15689898677",
                "name": "无权限角色下的用户",
                "password": "123456",
                "role": roleid,
                "username": "autouserXwithoutAuth",
            }
        }
    });
}



updatetoNoAuthorization = async (logindata, roleid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/roles/' + roleid + '/authorization/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
        data: {
            "roleAuthorizations": []
        }
    });

}


//以上为指定权限用户的方法-------------------------------------------


//以下为删除方法----------------------------------------------------

deleteSchool = async (logindata, schoolid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/schools/' + schoolid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}



deleteeBook = async (logindata, ebookitemid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/ebooks/' + ebookitemid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}


deleteeBookmenu = async (logindata, eBookmenuid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/ebooks/menu/' + eBookmenuid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

deleteSchedule = async (logindata, scheduleid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/schedules/' + scheduleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}


deleteRole = async (logindata, roleid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/roles/' + roleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

deleteUser = async (logindata, userid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/users/info/' + userid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
}

//-------------------------


test("Admin登录>>>创建无权限角色>>>创建其下用户>>>修改该角色至无权限", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');

    const createRolewithoutAuthres = await createRolewithoutAuth(logindata);
    expect(createRolewithoutAuthres.data.data.rolename).toBe('无权限的角色');
    var roleid = createRolewithoutAuthres.data.data._id;
    console.log('创建无权限的角色成功！');


    const createUserwithoutAuthres = await createUserwithoutAuth(logindata, roleid);
    expect(createUserwithoutAuthres.data.data.name).toBe('无权限角色下的用户');
    userid = createUserwithoutAuthres.data.data._id;
    console.log('创建无权限的角色下用户成功！');

    const updatetoNoAuthorizationres = await updatetoNoAuthorization(logindata, roleid)
    expect(updatetoNoAuthorizationres.data.data._id).toBe(roleid);
    console.log('修改角色权限成功！');

    //以上操作将创建无权限用户autouserXwithoutAuth 密码123456
})



test("Admin登录>>>获取科目>>>创建学校>>>修改学校>>>查询到该学校>>>错误用户名密码登录(拒绝)>>>登录学校初始用户>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');
    const subjectidArray = await getSubject(logindata);
    console.log('获取科目id数组成功！');
    const createSchoolres = await createSchool(logindata, '自动化创建的通产学校', subjectidArray);
    expect(createSchoolres.data.result.data.name).toBe('自动化创建的通产学校');
    var schoolid = createSchoolres.data.result.data._id;
    var originAdminid = createSchoolres.data.originAdmin._id;
    console.log('创建学校成功');

    const updateSchoolres = await updateSchool(logindata, subjectidArray, schoolid, originAdminid);
    expect(updateSchoolres.data.result.data.name).toBe('这是一个被修改了的自动化新建的通产学校');
    console.log('修改学校成功');



    const getSchoolres = await getSchool(logindata);
    var target = getSchoolres.data.result.data.find((val) => val.name == '这是一个被修改了的自动化新建的通产学校');
    expect(target.name).toBe('这是一个被修改了的自动化新建的通产学校');
    console.log('获取到学校成功');


    //以下为无权限用户操作

    try {
        await login("chushiguanliyuan", "1233432456");
    } catch (error) {
        expect(error.response.data.message).toBe("用户名或密码错误");
    }

    const chushilogindata = await login("chaojiX", "123456");
    expect(chushilogindata.user.username).toBe('chaojiX');

    const logindatawithoutAuth = await login("autouserXwithoutAuth", "123456");
    try {
        await getSubject(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createSchool(logindatawithoutAuth, '自动化创建的学校', subjectidArray);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createSchool(logindatawithoutAuth, '自动化创建的学校', subjectidArray);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateSchool(logindatawithoutAuth, subjectidArray, schoolid, originAdminid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getSchool(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSchool(logindatawithoutAuth, schoolid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
})



test("Admin登录>>>获取科目>>>获取年级>>>创建电子课本>>>修改电子课本>>>查询到该课本>>>创建电子书章节>>>创建电子书子章节>>>修改电子书章节>>>修改电子书子章节>>>查看电子书章节>>>查看电子书子章节>>>>>创建电子书资源目录>>>创建电子书子资源目录>>>修改电子书资源目录>>>修改电子书子资源目录>>>查看电子书资源目录>>>查看电子书子资源目录>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');
    const subjectidArray = await getSubject(logindata);
    console.log('获取科目id数组成功！');
    const gradeidArray = await getGrade(logindata);
    console.log('获取年级id数组成功！');
    const createeBookres = await createeBook(logindata, gradeidArray[0], subjectidArray[0]);
    var ebookitemid = createeBookres.data.data._id;
    expect(createeBookres.data.data.title).toBe('自动化创建的电子书');
    console.log('创建电子课本成功！');
    const updateeBookres = await updateeBook(logindata, ebookitemid, gradeidArray[0], subjectidArray[0]);
    expect(updateeBookres.data.data.title).toBe('这是一个被自动化修改的电子书名');
    console.log('修改电子课本成功！');
    const geteBookres = await geteBook(logindata);
    var target = geteBookres.data.data.find((val) => val.title == '这是一个被自动化修改的电子书名');
    expect(target.title).toBe('这是一个被自动化修改的电子书名');
    console.log('获取到电子课本成功！');

    const createeBookmenures = await createeBookmenu(logindata, ebookitemid, '自动化创建的电子书章节');
    var eBookmenuid = createeBookmenures.data.data._id;
    expect(createeBookmenures.data.data.name).toBe('自动化创建的电子书章节');
    console.log('创建电子书章节成功！');

    const createeBookchildmenures = await createeBookchildmenu(logindata, ebookitemid, '自动化创建的电子书子章节', eBookmenuid)
    var eBookmenuchildid = createeBookchildmenures.data.data._id;
    expect(createeBookchildmenures.data.data.name).toBe('自动化创建的电子书子章节');
    console.log('创建电子书子章节成功！');

    const updateeBookmenures = await updateeBookmenu(logindata, eBookmenuid);
    expect(updateeBookmenures.data.data.name).toBe('自动化修改的章节名');
    console.log('修改电子书章节成功！');


    const updateeBookchildmenures = await updateeBookmenu(logindata, eBookmenuchildid);
    expect(updateeBookchildmenures.data.data.name).toBe('自动化修改的章节名');
    console.log('修改电子书子章节成功！');


    const geteBookmenures = await geteBookmenu(logindata, ebookitemid);
    var target1 = geteBookmenures.data.data.find((val) => val.name == '自动化修改的章节名');
    expect(target1.name).toBe('自动化修改的章节名');
    console.log('获取电子书章节成功！');


    const geteBookchildmenures = await geteBookchildmenu(logindata, ebookitemid, eBookmenuid);
    var target2 = geteBookchildmenures.data.data.find((val) => val.name == '自动化修改的章节名');
    expect(target2.name).toBe('自动化修改的章节名');
    console.log('获取电子书子章节成功！');


    const createeBookResourcemenures = await createeBookResourcemenu(logindata, ebookitemid, '自动化创建的电子书资源章节');
    var eBookResourcemenuid = createeBookResourcemenures.data.data._id;
    expect(createeBookResourcemenures.data.data.name).toBe('自动化创建的电子书资源章节');
    console.log('创建电子书资源章节成功！');

    const createeBookResourcechildmenures = await createeBookResourcechildmenu(logindata, '自动化创建的电子书资源子章节', eBookResourcemenuid)
    var eBookResourcechildmenuid = createeBookResourcechildmenures.data.data._id;
    expect(createeBookResourcechildmenures.data.data.name).toBe('自动化创建的电子书资源子章节');
    console.log('创建电子书资源子章节成功！');

    const updateeBookResourcemenures = await updateeBookResourcemenu(logindata, eBookResourcemenuid);
    expect(updateeBookResourcemenures.data.data.name).toBe('自动化修改的资源目录名');
    console.log('修改电子书资源目录成功！');

    const updateeBookResourcechildmenures = await updateeBookResourcemenu(logindata, eBookResourcechildmenuid);
    expect(updateeBookResourcechildmenures.data.data.name).toBe('自动化修改的资源目录名');
    console.log('修改电子书资源子目录成功！');

    const geteBookResourcemenures = await geteBookresourcemenu(logindata, ebookitemid);
    var target3 = geteBookResourcemenures.data.data.find((val) => val.name == '自动化修改的资源目录名');
    expect(target3.name).toBe('自动化修改的资源目录名');
    console.log('获取电子书资源目录成功！');

    const geteBookresourcechildmenures = await geteBookresourcechildmenu(logindata, ebookitemid, eBookResourcemenuid)
    var target4 = geteBookresourcechildmenures.data.data.find((val) => val.name == '自动化修改的资源目录名');
    expect(target4.name).toBe('自动化修改的资源目录名');
    console.log('获取电子书资源目录成功！');


    const updateResourcetomenures = await updateResourcetomenu(logindata, eBookResourcemenuid);
    expect(updateResourcetomenures.data.data.name).toBe('自动化创建的附件');
    console.log('上传附件至资源目录成功！');

    const logindatawithoutAuth = await login("autouserXwithoutAuth", "123456");
    try {
        await createeBook(logindatawithoutAuth, gradeidArray[0], subjectidArray[0])
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateeBook(logindatawithoutAuth, ebookitemid, gradeidArray[0], subjectidArray[0])
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await geteBook(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteeBook(logindatawithoutAuth, ebookitemid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
})


test("Admin登录>>>资源管理>>>获取到电子课本>>>获取电子书章节>>>从资源管理获取学科内容>>>>从学科获取(子)知识点>>>通过知识点获取文档>>>通过itemid获取文档资源>>>post文档资源data：通过知识点添加文档至课本资源目录", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');


    const geteBookres = await geteBook(logindata);
    var target = geteBookres.data.data.find((val) => val.title == '这是一个被自动化修改的电子书名');
    expect(target.title).toBe('这是一个被自动化修改的电子书名');
    var bookId = target._id;
    console.log('获取到电子课本成功！');

    const geteBookmenures = await geteBookmenu(logindata, bookId);
    var menutarget = geteBookmenures.data.data.find((val) => val.name == '自动化修改的章节名');
    expect(menutarget.name).toBe('自动化修改的章节名');
    var menuId = menutarget._id;
    console.log('获取电子书章节成功！');

    const getSublistfromResourcemanagementres = await getSublistfromResourcemanagement(logindata);
    var target5 = getSublistfromResourcemanagementres.data.data.find((val) => val.subjectName == '语文');
    expect(target5.subjectName).toBe('语文');
    console.log('从资源管理获取学科内容成功！');

    // 华丽的分割线，以下为通过知识点添加文档------------------------------------------------------

    const getKnowledgefromSubjectres = await getKnowledgefromSubject(logindata);
    var KnowledgeIdArray = [];
    var KnowledgechildIdArray = [];
    for (let i = 0; i < getKnowledgefromSubjectres.data.data.length; i += 1) {
        KnowledgeIdArray.push(getKnowledgefromSubjectres.data.data[i].id);
        if (getKnowledgefromSubjectres.data.data[i].childs) {
            for (let j = 0; j < getKnowledgefromSubjectres.data.data[i].childs.length; j += 1) {
                KnowledgechildIdArray.push(getKnowledgefromSubjectres.data.data[i].childs[j].id);
            }
        } else {
            console.log("从学科中捕获到的该Knowledge中无子Knowledge");
        }
    }
    console.log('从学科获取子知识点成功！');


    const getDocumentsViaKnowledgeIdres = await getDocumentsViaKnowledgeId(logindata, KnowledgechildIdArray);
    console.log('通过知识点获取文档成功！');
    var itemIdArray = [];
    for (let i = 0; i < getDocumentsViaKnowledgeIdres.data.data.length; i += 1) {
        itemIdArray.push(getDocumentsViaKnowledgeIdres.data.data[i].itemId)
    }

    var itemIds = "" + itemIdArray[0] + "," + itemIdArray[1];
    const getResouceDataViaitemIdres = await getResouceDataViaitemId(logindata, itemIds);
    console.log('通过itemid获取文档资源data成功！');

    const AddDocumenttoBookres = await AddDocumenttoBook(logindata, getResouceDataViaitemIdres, menuId);
    expect(AddDocumenttoBookres.data.success).toBe(true);
    console.log('post文档资源data：通过知识点添加文档至课本资源目录成功！');
})


test("Admin登录>>>资源管理>>>获取到电子课本>>>获取电子书章节>>>从资源管理获取学科内容>>>>从学科获取教材类别>>>从教材册别获取课本>>>从Bookid获取(子)章节>>>通过章节获取文档资源list>>>通过itemid获取文档资源data>>>post文档资源data：通过章节添加文档至课本资源目录", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');

    const geteBookres = await geteBook(logindata);
    var target = geteBookres.data.data.find((val) => val.title == '这是一个被自动化修改的电子书名');
    expect(target.title).toBe('这是一个被自动化修改的电子书名');
    var bookId = target._id;
    console.log('获取到电子课本成功！');

    const geteBookmenures = await geteBookmenu(logindata, bookId);
    var menutarget = geteBookmenures.data.data.find((val) => val.name == '自动化修改的章节名');
    expect(menutarget.name).toBe('自动化修改的章节名');
    var menuId = menutarget._id;
    console.log('获取电子书章节成功！');

    const getSublistfromResourcemanagementres = await getSublistfromResourcemanagement(logindata);
    var target5 = getSublistfromResourcemanagementres.data.data.find((val) => val.subjectName == '语文');
    expect(target5.subjectName).toBe('语文');
    console.log('从资源管理获取学科内容成功！');


    // 华丽的分割线，以下为通过教材、课本、章节添加文档------------------------------------------------------
    const getVersionsfromSubjectres = await getVersionsfromSubject(logindata);
    var target7 = getVersionsfromSubjectres.data.data.find((val) => val.versionName == '人教版（新课程标准）');
    expect(target7.versionName).toBe('人教版（新课程标准）');
    console.log('从学科获取教材类别成功！');
    var versionsIdArray = [];
    for (let i = 0; i < getVersionsfromSubjectres.data.data.length; i += 1) {
        versionsIdArray.push(getVersionsfromSubjectres.data.data[i].versionId)
    }

    const getBooksfromVersionsres = await getBooksfromVersions(logindata, versionsIdArray);
    console.log('从教材册别获取课本成功！');
    var bookIdArray = [];
    for (let i = 0; i < getBooksfromVersionsres.data.data.length; i += 1) {
        bookIdArray.push(getBooksfromVersionsres.data.data[i].bookId)
    }


    const getChaptersfromBookidres = await getChaptersfromBookid(logindata, bookIdArray);
    console.log('从Bookid获取章节成功！');
    var ChapterIdArray = [];
    var ChapterchildIdArray = [];
    for (let i = 0; i < getChaptersfromBookidres.data.data.length; i += 1) {
        ChapterIdArray.push(getChaptersfromBookidres.data.data[i].id);
        if (getChaptersfromBookidres.data.data[i].childs) {
            for (let j = 0; j < getChaptersfromBookidres.data.data[i].childs.length; j += 1) {
                ChapterchildIdArray.push(getChaptersfromBookidres.data.data[i].childs[j].id);
            }
        } else {
            console.log("从Bookid捕获到该Chapter无childChapter");
        }
    }
    console.log('从Bookid获取子章节成功！');


    const getDocumentsViaChapterIdres = await getDocumentsViaChapterId(logindata, versionsIdArray, bookIdArray, ChapterchildIdArray);
    console.log('通过章节获取文档资源list成功！');
    var itemIdArray2 = [];
    for (let i = 0; i < getDocumentsViaChapterIdres.data.data.length; i += 1) {
        itemIdArray2.push(getDocumentsViaChapterIdres.data.data[i].itemId);
    }

    itemIds2 = "" + itemIdArray2[0] + "," + itemIdArray2[1];
    const getResouceDataViaitemIdres2 = await getResouceDataViaitemId(logindata, itemIds2);
    console.log('通过itemid获取文档资源data成功！');


    const AddDocumenttoBookres2 = await AddDocumenttoBook(logindata, getResouceDataViaitemIdres2, menuId);
    expect(AddDocumenttoBookres2.data.success).toBe(true);
    console.log('post文档资源data：通过章节添加文档至课本资源目录成功！');
})



test("Admin登录>>>获取个人账户ID>>>创建日程>>>修改日程>>>查询到该日程>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');
    const userinfoid = await getuserid(logindata);
    console.log('获取个人账户ID成功！');
    const createScheduleres = await createSchedule(logindata, userinfoid);
    var scheduleid = createScheduleres.data.data._id;
    expect(createScheduleres.data.data.title).toBe('自动化创建的日程');
    console.log('创建日程成功！');

    const updateScheduleres = await updateSchedule(logindata, scheduleid, userinfoid);
    expect(updateScheduleres.data.data.title).toBe('自动化修改的日程');
    console.log('修改日程成功！');

    const geteScheduleres = await geteSchedule(logindata);
    var target = geteScheduleres.data.data.find((val) => val.title == '自动化修改的日程');
    expect(target.title).toBe('自动化修改的日程');
    console.log('获取日程成功！');

    const logindatawithoutAuth = await login("autouserXwithoutAuth", "123456");

    try {
        await createSchedule(logindatawithoutAuth, userinfoid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createSchedule(logindatawithoutAuth, userinfoid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createSchedule(logindatawithoutAuth, userinfoid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await createSchedule(logindatawithoutAuth, userinfoid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSchedule(logindatawithoutAuth, scheduleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

})



test("Admin登录>>>创建角色>>>修改角色>>>查询到该角色>>>创建用户>>修改用户>>>查询到该用户>>>修改角色权限>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const logindata = await login("admin", "123456");
    console.log('admin登录成功！');

    const createroleres = await createRole(logindata);
    expect(createroleres.data.data.rolename).toBe('自动化创建的角色');
    var roleid = createroleres.data.data._id;
    console.log('创建角色成功！');


    const updateRoleres = await updateRole(logindata, roleid);
    expect(updateRoleres.data.data.rolename).toBe('自动化修改的角色');
    console.log('修改角色成功！');

    const getRoleres = await getRole(logindata);
    var target1 = getRoleres.data.data.find((val) => val.rolename == '自动化修改的角色');
    expect(target1.rolename).toBe('自动化修改的角色');
    console.log('获取角色成功！');

    const createUserres = await createUser(logindata, roleid);
    expect(createUserres.data.data.name).toBe('自动化创建的用户');
    userid = createUserres.data.data._id;
    console.log('创建用户成功！');

    const updateUserres = await updateUser(logindata, roleid, userid);
    expect(updateUserres.data.data.name).toBe('自动化修改的用户');
    console.log('修改用户成功！');

    const getUserres = await getUser(logindata);
    var target2 = getUserres.data.data.find((val) => val.name == '自动化修改的用户');
    expect(target2.name).toBe('自动化修改的用户');
    console.log('获取用户成功！');

    const updateAuthorizationres = await updateAuthorization(logindata, roleid)
    expect(updateAuthorizationres.data.data._id).toBe(roleid);
    console.log('修改角色权限成功！');


    const logindatawithoutAuth = await login("autouserXwithoutAuth", "123456");
    try {
        await createRole(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateRole(logindatawithoutAuth, roleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getRole(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createUser(logindatawithoutAuth, roleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateUser(logindatawithoutAuth, roleid, userid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getUser(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateAuthorization(logindatawithoutAuth, roleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteUser(logindatawithoutAuth, userid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteRole(logindatawithoutAuth, roleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    console.log('admin.test.js总共执行了【' + timer + '】次测试用例');
})