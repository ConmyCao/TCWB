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

    timer++;
    const logindata = res.data.data;
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
    console.log("这是第" + timer + "次执行");
    return subjectidArray;
}

getSubjectname = async (logindata) => {
    const res = await axios({
        method: 'get',
        url: '/subjects/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': logindata.token,
        },
    });
    var getSubjectnameArray = [];
    for (let i = 0; i < res.data.data.length; i += 1) {
        getSubjectnameArray.push(res.data.data[i].name)
    }
    timer++;
    return getSubjectnameArray;
}


getgrade = async (originAdminlogindata) => {
    const res = await axios({
        method: 'get',
        url: '/grades/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
    var gradeidArray = [];
    for (let i = 0; i < res.data.data.length; i += 1) {
        gradeidArray.push(res.data.data[i]._id)
    }
    timer++;
    return gradeidArray;
}


userinfo = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/users/authorize/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    })
}


createSchool = async (logindata, name, subjectidArray, shcooladminname, shcooladminpassword) => {
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
            "mobile": "15994598765",
            "name": name,
            "section": "小学-初中",
            "sectionTime": 5,
            "semesterDate": [
                "2018-08-01T00:57:20.985Z",
                "2018-09-29T00:57:20.985Z"
            ],
            "subject": subjectidArray,
            "username": shcooladminname,
            "password": shcooladminpassword,

        }
    });
}



//以下为校内操作方法



createSchedule = async (originAdminlogindata, originAdminid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/schedules/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "address": "武汉市新洲区旧街街问津书院",
            "eventType": "emergency",
            "fromTime": "2018-09-04 16:43",
            "toTime": "2018-09-04 16:45",
            "repeat": "5",
            "title": "自动化创建的日程",
            "users": [originAdminid],
        }
    });
}



updateSchedule = async (originAdminlogindata, scheduleid, originAdminid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/schedules/' + scheduleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {

            "address": "武汉市新洲区旧街街问津书院",
            "eventType": "emergency",
            "fromTime": "2018-09-07 16:43",
            "toTime": "2018-09-07 16:45",
            "repeat": "5",
            "title": "自动化修改的日程",
            "users": [originAdminid],
        }
    });

}

geteSchedule = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/schedules/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

createRole = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/roles/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "order": 3,
            "rolename": "自动化创建的角色"
        }
    });
}



updateRole = async (originAdminlogindata, roleid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/roles/' + roleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "authorize": [],
            "order": 50,
            "rolename": "自动化修改的角色",
        }
    });
}

getRole = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/roles/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}



createUser = async (originAdminlogindata, roleid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/info/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "mobile": "15689898688",
            "name": "自动化创建的用户",
            "password": "12345678",
            "role": roleid,
            "username": "autouser",
            "info": {
                "gender": "男",
                "mobile": "15689898688",
                "name": "自动化创建的用户",
                "password": "12345678",
                "role": roleid,
                "username": "autouser",
            }
        }
    });
}

updateUser = async (originAdminlogindata, roleid, userid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/users/info/' + userid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {

            "gender": "男",
            "mobile": "15689898688",
            "name": "自动化修改的用户",
            "password": "123456789",
            "role": roleid,
            "username": "autouser",
            "_id": userid,
            "info": {
                "gender": "男",
                "mobile": "15689898688",
                "name": "自动化修改的用户",
                "password": "123456789",
                "role": roleid,
                "username": "autouser",
            }
        }
    });
}


getUser = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/users/info/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


updateAuthorization = async (originAdminlogindata, roleid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/roles/' + roleid + '/authorization/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "roleAuthorizations": [
                "get_messages",
                "create_message",
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
                "get_role_authorization"
            ]
        }
    });

}

//以下为指定权限用户的方法-------------------------------------------

createRolewithoutAuth = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/roles/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "order": 34,
            "rolename": "无权限的学校角色"
        }
    });
}



createUserwithoutAuth = async (originAdminlogindata, roleidwithouAuth) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/info/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "mobile": "15689875678",
            "name": "无权限角色下的学校用户",
            "password": "123456",
            "role": roleidwithouAuth,
            "username": "autouserwithoutAuth",
            "info": {
                "gender": "男",
                "mobile": "15689875678",
                "name": "无权限角色下的学校用户",
                "password": "123456",
                "role": roleidwithouAuth,
                "username": "autouserwithoutAuth",
            }
        }
    });
}



updatetoNoAuthorization = async (originAdminlogindata, roleidwithouAuth) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/roles/' + roleidwithouAuth + '/authorization/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "roleAuthorizations": []
        }
    });

}

//微信公众号管理



createSlidegroup = async (originAdminlogindata, slidegroupname) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/slide/group/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            'name': slidegroupname,
        }
    });
}

createSlidegroup2 = async () => {
    timer++;
    return await axios({
        method: 'post',
        url: '/slide/group/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            'name': '自动化创建的幻灯组2',
        }
    });
}

updateSlidegroup = async (originAdminlogindata, slidegroupid, schoolid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/slide/group/' + slidegroupid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "name": "自动化修改的幻灯组",
            "portals": [],
            "school": schoolid,
            "slides": [],
            "_id": slidegroupid,
        }
    });
}

getSlidegroup = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/slide/group/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

createSlide = async (originAdminlogindata, slidegroupid, slidename) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/slides/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "name": "自动化修改的幻灯组",
            "slides": {
                "title": slidename,
                "link": "http://www.baidu.com",
                "order": 1,
                "image": ""
            },
            "_id": slidegroupid,
        }
    });
}

updateSlide = async (originAdminlogindata, slidegroupid, slideid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/slides/' + slideid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "link": "http://www.baidu.com",
            "order": 2,
            "title": "自动化修改的幻灯片",
            "image": "",
            "_id": slideid,
            "slide_group": slidegroupid,
        }
    });
}

getSlide = async (originAdminlogindata, slidegroupid) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/slides/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        params: {
            '_id': slidegroupid
        },
    });
}


createFeaturegroup = async (originAdminlogindata, Featuregroupname) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/feature/group/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "order": 2,
            "name": Featuregroupname,
            "features": [
                {
                    "image": "icon07.png",
                    "title": "自动化创建的功能1",
                    "link": "http://m.baidu.com"
                },
                {
                    "image": "icon03.png",
                    "title": "自动化创建的功能2",
                    "link": "http://www.baidu.com"
                }
            ]

        }
    });
}

updateFeaturegroup = async (originAdminlogindata, schoolid, featuregroupid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/feature/group/' + featuregroupid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "_id": featuregroupid,
            "school": schoolid,
            "order": 7,
            "name": "自动化修改的功能集",
            "features": [
                {
                    "image": "icon08.png",
                    "title": "自动化修改的功能1",
                    "link": "http://m.baidu.com"
                },
                {
                    "image": "icon05.png",
                    "title": "自动化修改的功能2",
                    "link": "http://www.baidu.com"
                }
            ]
        }
    });
}

getFeaturegroup = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/feature/group/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


createPortal = async (originAdminlogindata, slidegroupid, portalname) => {
    timer++;
    return await axios({
        method: 'post',
        url: 'portal/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "slide_group": slidegroupid,
            "order": 7,
            "name": portalname
        }
    });
}


updatePortal = async (originAdminlogindata, slidegroupid, schoolid, portalid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/portal/' + portalid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "_id": portalid,
            "school": schoolid,
            "order": 3,
            "name": "自动化修改的栏目",
            "slide_group": slidegroupid,
        }
    });
}


getPortal = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: 'portal/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

createArtical = async (originAdminlogindata, portalid, articalname) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/article/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "brief": "自动化新建的文章摘要",
            "content": "<p>自动化新建文章内容</p>↵",
            "image": "",
            "isTop": true,
            "order": 2,
            "portals": [portalid],
            "status": "sent",
            "title": articalname,
            "type": "consult"
        }
    });
}


updateArtical = async (originAdminlogindata, articleid, schoolid, articlelink, portalid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/article/' + articleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "_id": articleid,
            "brief": "自动化修改的文章摘要",
            "content": "<p>自动化修改的文章内容</p>↵",
            "image": "",
            "isTop": true,
            "link": articlelink,
            "school": schoolid,
            "share_count": 0,
            "view_count": 0,
            "order": 7,
            "portals": [portalid],
            "status": "sent",
            "title": "自动化修改的文章",
            "type": "consult"
        }
    });
}


getArtical = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/article/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

updateOfficial = async (originAdminlogindata, userid, slidegroupid, featuregroupid) => {
    timer++;
    await axios({
        method: 'get',
        url: '/official/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        }
    })
    return await axios({
        method: 'put',
        url: '/official/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "admin": [userid],
            "appid": "weixinappid",
            "appkey": "weixinappkey",
            "name": "这是自动化配置的公众号",
            "slide_group": slidegroupid,
            "feature_group": [featuregroupid]
        }
    });
}


deleteOfficial = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/official/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "feature_group": []
        }
    });
}


//以下为校级管理方法


updateSchool = async (originAdminlogindata, subjectidArray, schoolid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/schools/' + schoolid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "adress": "自动化修改的地址",
            "badge": [],
            "brief": "自动化修改的简介",
            "section": "初中",
            "sectionTime": 10,
            "subject": subjectidArray,
            "semesterDate": ["2018-08-01T00:57:20.985Z", "2018-09-29T00:57:20.985Z"],
            "_id": schoolid,
        }
    });
}


createClass = async (originAdminlogindata, gradeidArray, name) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/classes/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "grade": gradeidArray[7],
            "name": name,
            "headmaster": [],
            "remark": "这是自动化新建的班级备注",
            "section": "初中",
            "type": "1"
        }
    });
}

updateClass = async (originAdminlogindata, gradeidArray, schoolid, classid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/classes/' + classid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "grade": gradeidArray[6],
            "headmaster": [],
            "name": "自动化修改的班级",
            "remark": "这是自动化修改的班级备注",
            "school": schoolid,
            "section": "初中",
            "type": "1",
        }
    });
}

getClass = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/classes/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


createTeacher = async (originAdminlogindata, classid, classidArray, classnameArray, subjectidArray, subjectnameArray) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation//admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "teacher",
            "values": {
                "classes": [classid],
                "info": {
                    "age": "45",
                    "gender": "男",
                    "mobile": "15978945612",
                    "name": "自动化创建的教师",
                    "password": "123456789",
                    "sfzj": "420117199003121215",
                    "staff": "45699565",
                    "username": "autoteacher",
                    "xl": "本科",
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "mainSubject": {
                        "_id": subjectidArray[2],
                        "name": subjectnameArray[2],
                    },
                    "subject": [
                        {
                            "key": subjectidArray[3],
                            "label": subjectnameArray[3],
                        },
                        {
                            "key": subjectidArray[4],
                            "label": subjectnameArray[4],
                        }
                    ]
                },
                "mobile": "15978945612",
                "name": "自动化创建的教师",
                "password": "123456789",
                "subject": [
                    {
                        "_id": subjectidArray[3],
                        "name": subjectnameArray[3],
                    },
                    {
                        "_id": subjectidArray[4],
                        "name": subjectnameArray[4],
                    }
                ],
                "username": "autoteacher",
            }
        }
    });
}






create2ndTeacher = async () => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation//admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "teacher",
            "values": {
                "classes": [classid],
                "info": {
                    "age": "45",
                    "gender": "男",
                    "mobile": "15978975542",
                    "name": "自动化创建的老师x",
                    "password": "123456789",
                    "sfzj": "420117199003121355",
                    "staff": "45699565",
                    "username": "autoteacherX",
                    "xl": "本科",
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "mainSubject": {
                        "_id": subjectidArray[2],
                        "name": subjectnameArray[2],
                    },
                    "subject": [
                        {
                            "key": subjectidArray[3],
                            "label": subjectnameArray[3],
                        },
                        {
                            "key": subjectidArray[4],
                            "label": subjectnameArray[4],
                        }
                    ]
                },
                "mobile": "15978975542",
                "name": "自动化创建的老师x",
                "password": "123456789",
                "subject": [
                    {
                        "_id": subjectidArray[3],
                        "name": subjectnameArray[3],
                    },
                    {
                        "_id": subjectidArray[4],
                        "name": subjectnameArray[4],
                    }
                ],
                "username": "autoteacher2",
            }
        }
    });
}

createdulpTeacher = async () => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation//admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "teacher",
            "values": {
                "classes": [classid],
                "info": {
                    "age": "45",
                    "gender": "男",
                    "mobile": "15978975612",
                    "name": "自动化创建的老师2",
                    "password": "123456789",
                    "sfzj": "420117199003121355",
                    "staff": "45699565",
                    "username": "autoteacher2",
                    "xl": "本科",
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "mainSubject": {
                        "_id": subjectidArray[2],
                        "name": subjectnameArray[2],
                    },
                    "subject": [
                        {
                            "key": subjectidArray[3],
                            "label": subjectnameArray[3],
                        },
                        {
                            "key": subjectidArray[4],
                            "label": subjectnameArray[4],
                        }
                    ]
                },
                "mobile": "15978975612",
                "name": "自动化创建的老师2",
                "password": "123456789",
                "subject": [
                    {
                        "_id": subjectidArray[3],
                        "name": subjectnameArray[3],
                    },
                    {
                        "_id": subjectidArray[4],
                        "name": subjectnameArray[4],
                    }
                ],
                "username": "autoteacher2",
            }
        }
    });
}

updateTeacher = async (originAdminlogindata, classid, classidArray, classnameArray, subjectidArray, subjectnameArray, teacherid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/users/relation/' + teacherid + '//admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "teacher",
            "values": {
                "classes": [classid],
                "olderClasses": [classid],
                "subject": [
                    {
                        "_id": subjectidArray[2],
                        "name": subjectnameArray[2]
                    }
                ],
                "isAlowLogin": true,
                "isbinded": false,
                "mobile": "15984565464",
                "name": "自动化修改的教师",
                "password": "123456789",
                "username": "autoteacher",
                "info": {
                    "age": "45",
                    "gender": "男",
                    "mobile": "15984565464",
                    "name": "自动化修改的教师",
                    "password": "123456789",
                    "sfzj": "420117199003121325",
                    "staff": "4569955",
                    "username": "autoteacher",
                    "xl": "本科",
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "mainSubject": {
                        "_id": subjectidArray[3],
                        "name": subjectnameArray[3]
                    },
                    "subject": [
                        {
                            "key": subjectidArray[2],
                            "label": subjectnameArray[2]
                        }
                    ]
                }
            }
        }
    });
}

getTeacher = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/users/relation/teacher/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


createStudent = async (originAdminlogindata, classid, classidArray, classnameArray, name) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "student",
            "values": {
                "classes": [classid],
                "mobile": "15984565475",
                "name": name,
                "password": "123456",
                "username": "autostudent",
                "info": {
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "hkszd": [
                        "河北省",
                        "秦皇岛市",
                        "北戴河区"
                    ],
                    "cym": "王小二",
                    "dszy": "0",
                    "gender": "男",
                    "gj": "香港",
                    "jg": "湖北武汉",
                    "jkzk": "一般或较弱",
                    "mobile": "15984565475",
                    "mz": "苗族",
                    "name": name,
                    "password": "123456",
                    "rxnyr": "2018-08-01T06:41:47.038Z",
                    "sfzj": "420117199002121245",
                    "username": "autostudent",
                    "xh": "11SDDDSSS23423432424",
                    "xx": "未知血型",
                    "xzz": "weswffjk sfjkls jlfjkdl fjkljksdlfjkskdl f4234324324",
                    "zjxy": "天主教",
                    "zzmm": "群众"
                }
            }
        }
    });
}


create2ndStudent = async () => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "student",
            "values": {
                "classes": [classid],
                "mobile": "15984446475",
                "name": "自动化创建的学生x",
                "password": "123456",
                "username": "autostudentx",
                "info": {
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "hkszd": [
                        "河北省",
                        "秦皇岛市",
                        "北戴河区"
                    ],
                    "cym": "王小二",
                    "dszy": "0",
                    "gender": "男",
                    "gj": "香港",
                    "jg": "湖北武汉",
                    "jkzk": "一般或较弱",
                    "mobile": "15984446475",
                    "mz": "苗族",
                    "name": "自动化创建的学生x",
                    "password": "123456",
                    "rxnyr": "2018-08-01T06:41:47.038Z",
                    "sfzj": "420117199112121245",
                    "username": "autostudentx",
                    "xh": "11SDDDSSS23423432424",
                    "xx": "未知血型",
                    "xzz": "weswffjk sfjkls jlfjkdl fjkljksdlfjkskdl f4234324324",
                    "zjxy": "天主教",
                    "zzmm": "群众"
                }
            }
        }
    });
}


createdulpStudent = async () => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "student",
            "values": {
                "classes": [classid],
                "mobile": "15985546475",
                "name": "自动化创建的学生2",
                "password": "123456",
                "username": "autostudent2",
                "info": {
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "hkszd": [
                        "河北省",
                        "秦皇岛市",
                        "北戴河区"
                    ],
                    "cym": "王小二",
                    "dszy": "0",
                    "gender": "男",
                    "gj": "香港",
                    "jg": "湖北武汉",
                    "jkzk": "一般或较弱",
                    "mobile": "15985546475",
                    "mz": "苗族",
                    "name": "自动化创建的学生2",
                    "password": "123456",
                    "rxnyr": "2018-08-01T06:41:47.038Z",
                    "sfzj": "420117199112121245",
                    "username": "autostudent2",
                    "xh": "11SDDDSSS23423432424",
                    "xx": "未知血型",
                    "xzz": "weswffjk sfjkls jlfjkdl fjkljksdlfjkskdl f4234324324",
                    "zjxy": "天主教",
                    "zzmm": "群众"
                }
            }
        }
    });
}


updateStudent = async (originAdminlogindata, classid, classidArray, classnameArray, studentid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/users/relation/' + studentid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "student",
            "values": {
                "classes": [classid],
                "olderClasses": [classid],
                "isAlowLogin": true,
                "isbinded": false,
                "mobile": "15984565421",
                "name": "自动化修改的学生",
                "password": "123456",
                "username": "updatestudentsuser",
                "info": {
                    "classes": [
                        {
                            "key": classidArray[0],
                            "label": classnameArray[0]
                        }
                    ],
                    "hkszd": [
                        "河北省",
                        "秦皇岛市",
                        "北戴河区"
                    ],
                    "cym": "王小三",
                    "dszy": "0",
                    "gender": "男",
                    "gj": "香港",
                    "jg": "湖北武汉",
                    "jkzk": "一般或较弱",
                    "mobile": "15986546565",
                    "mz": "苗族",
                    "name": "自动化修改的学生",
                    "password": "123456",
                    "rxnyr": "2018-08-01T06:41:47.038Z",
                    "sfzj": "420117199002151215",
                    "username": "updatestudentsuser",
                    "xh": "11SDDDSSS23423432424",
                    "xx": "未知血型",
                    "xzz": "weswffjk sfjkls jlfjkdl fjkljksdlfjkskdl f4234324324",
                    "zjxy": "天主教",
                    "zzmm": "群众"
                }
            }
        }
    });
}

getStudent = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/users/relation/student/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

createParent = async (originAdminlogindata, studentid, parentname) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/users/relation/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "parent",
            "values": {
                "username": "autoparent",
                "mobile": "15978947612",
                "name": parentname,
                "password": "123456",
                "students": [studentid],
                "info": {
                    "csrq": "2018-08-01T07:58:51.594Z",
                    "gender": "男",
                    "gj": "香港",
                    "jg": "湖北武汉",
                    "jkzk": "一般或较弱",
                    "mobile": "15978947612",
                    "mz": "回族",
                    "name": parentname,
                    "password": "123456",
                    "students": [
                        {
                            "key": studentid,
                            "label": "自动化创建的学生"
                        }
                    ],
                    "username": "autoparent"
                }
            }
        }
    });
}


updateParent = async (originAdminlogindata, studentid, parentid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/users/relation/' + parentid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "from": "parent",
            "values": {
                "olderStudents": [studentid],
                "students": [studentid],
                "isAlowLogin": true,
                "isbinded": false,
                "mobile": "15978947612",
                "name": "自动化修改的家长",
                "password": "12345623424",
                "username": "autoparentuser",
                "info": {
                    "students": [
                        {
                            "key": studentid,
                            "label": "自动化修改的学生"
                        }
                    ],
                    "csrq": "2018-08-01T07:58:51.594Z",
                    "gender": "男",
                    "gj": "香港",
                    "jg": "湖北武汉",
                    "jkzk": "一般或较弱",
                    "mobile": "15978947612",
                    "mz": "回族",
                    "name": "自动化修改的家长",
                    "password": "12345623424",
                    "username": "autoparentuser"
                }
            }
        }
    });
}

getParent = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/users/relation/parent/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


getmessageRole = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/roles/ignore/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


sendMessage = async (originAdminlogindata, classid, roleidArray) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/messages/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "classes": [classid],
            "content": "自动化发送的简要内容",
            "message": "自动化发送的短信内容",
            "news": "<p>自动化发送的消息内容</p>↵",
            "pushMethod": ["wechat", "sms", "jpush"],
            "roles": roleidArray,
            "sendTime": "2018-09-27T07:21:17.731Z",
            "title": "自动化发送的消息标题",
        }
    });
}


getMessage = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/messages/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

uploadmyresources = async (originAdminlogindata, originAdminid, title) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/my/resources/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "grade": "小学一年级",
            "initiator": originAdminid,
            "isShare": "0",
            "link": "f6f08c27e8e80450580e0f07a5f7b13f.docx",
            "size": 23435,
            "subject": "化学",
            "title": title,
            "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "variety": "教学案"
        }
    });
}


getmyresources = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/my/resources/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

uploadschoolresources = async (originAdminlogindata, originAdminid, title) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/school/resources/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
        data: {
            "grade": "小学一年级",
            "initiator": originAdminid,
            "isShare": "1",
            "link": "3bca9b913b3a7e223635ca3d253c4f4e.docx",
            "size": 20661,
            "subject": "地理",
            "title": title,
            "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "variety": "课件"
        }
    });
}

getschoolresources = async (originAdminlogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/school/resources/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

teacherLogin = async () => {
    const res = await axios({
        method: 'get',
        url: '/users/login/admin',
        baseURL: config.baseURL,
        params: {
            username: 'autoteacher',
            password: '123456789',
        },
    });
    teacherLogindata = res.data.data;
    timer++;
    return teacherLogindata;
}


createTimetable = async (teacherLogindata, classid, teacherid) => {
    timer++;
    return await axios({
        method: 'post',
        url: '/timetables/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': teacherLogindata.token,
        },
        data: {
            "address": "自动化创建上课地址",
            "class": classid,
            "sectionRange": [3, 4],
            "teacher": teacherid,
            "title": "化学",
            "weekRange": [4, 4],
            "weekday": 3
        }
    });
}



updateTimetable = async (teacherLogindata, classid, timetableid) => {
    timer++;
    return await axios({
        method: 'put',
        url: '/timetables/' + timetableid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': teacherLogindata.token,
        },
        data: {
            "address": "自动化修改的上课地址",
            "class": classid,
            "classnames": ["tbodytd lessonTd", "text-center", "align-middle"],
            "rowspan": 2,
            "sectionRange": [5, 6],
            "title": "化学",
            "weekRange": [1, 4],
            "weekday": 4
        }
    });
}


getTimetable = async (teacherLogindata) => {
    timer++;
    return await axios({
        method: 'get',
        url: '/timetables/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': teacherLogindata.token,
        },
    });
}


//以下为删除测试用例
deleteUser = async (originAdminlogindata, userid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/users/info/' + userid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteRole = async (originAdminlogindata, roleid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/roles/' + roleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteSchedule = async (originAdminlogindata, scheduleid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/schedules/' + scheduleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}



deleteParent = async (originAdminlogindata, parentid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/users/relation/' + parentid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteStudent = async (originAdminlogindata, studentid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/users/relation/' + studentid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteTeacher = async (originAdminlogindata, teacherid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/users/relation/' + teacherid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteClass = async (originAdminlogindata, classid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/classes/' + classid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteMyresource = async (originAdminlogindata, myresourceid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/my/resources/' + myresourceid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteSchoolresource = async (originAdminlogindata, schoolresourceid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/school/resources/' + schoolresourceid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteArticle = async (originAdminlogindata, articleid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/article/' + articleid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deletePortal = async (originAdminlogindata, portalid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/portal/' + portalid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteFeaturegroup = async (originAdminlogindata, featuregroupid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/feature/group/' + featuregroupid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}


deleteSlide = async (originAdminlogindata, slideid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/slides/' + slideid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}

deleteSlidegroup = async (originAdminlogindata, slidegroupid) => {
    timer++;
    return await axios({
        method: 'delete',
        url: '/slide/group/' + slidegroupid + '/admin',
        baseURL: config.baseURL,
        headers: {
            'api-access-token': originAdminlogindata.token,
        },
    });
}



test("Admin登录>>>获取科目>>>创建学校", async () => {
    const logindata = await login("admin", "123456");

    console.log('admin登录成功！');
    const subjectidArray = await getSubject(logindata);
    console.log('获取科目id数组成功！');
    const createSchoolres = await createSchool(logindata, '自动化创建的学校', subjectidArray, 'chaoji', '123456');
    expect(createSchoolres.data.result.data.name).toBe('自动化创建的学校');
    var schoolid = createSchoolres.data.result.data._id;

    console.log('创建学校成功');
})



test("学校初始管理员登录>>>创建角色>>>创建用户>>>>修改角色至无权限>>>创建角色>>>修改角色>>>查询到该角色>>>创建用户>>修改用户>>>查询到该用户>>>修改角色权限>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const originAdminlogindata = await login("chaoji", "123456");
    console.log('admin登录成功！');


    const createRolewithoutAuthres = await createRolewithoutAuth(originAdminlogindata);
    expect(createRolewithoutAuthres.data.data.rolename).toBe('无权限的学校角色');
    var roleidwithouAuth = createRolewithoutAuthres.data.data._id;
    console.log('创建无权限的角色成功！');


    const createUserwithoutAuthres = await createUserwithoutAuth(originAdminlogindata, roleidwithouAuth);
    expect(createUserwithoutAuthres.data.data.name).toBe('无权限角色下的学校用户');
    useridwithouAuth = createUserwithoutAuthres.data.data._id;
    console.log('创建无权限的角色下用户成功！');

    const updatetoNoAuthorizationres = await updatetoNoAuthorization(originAdminlogindata, roleidwithouAuth)
    expect(updatetoNoAuthorizationres.data.data._id).toBe(roleidwithouAuth);
    console.log('修改角色权限成功！');


    const createroleres = await createRole(originAdminlogindata);
    expect(createroleres.data.data.rolename).toBe('自动化创建的角色');
    var roleid = createroleres.data.data._id;
    console.log('创建角色成功！');


    const updateRoleres = await updateRole(originAdminlogindata, roleid);
    expect(updateRoleres.data.data.rolename).toBe('自动化修改的角色');
    console.log('修改角色成功！');

    const getRoleres = await getRole(originAdminlogindata);
    var target1 = getRoleres.data.data.find((val) => val.rolename == '自动化修改的角色');
    expect(target1.rolename).toBe('自动化修改的角色');
    console.log('获取角色成功！');

    const createUserres = await createUser(originAdminlogindata, roleid);
    expect(createUserres.data.data.name).toBe('自动化创建的用户');
    userid = createUserres.data.data._id;
    console.log('创建用户成功！');

    const updateUserres = await updateUser(originAdminlogindata, roleid, userid);
    expect(updateUserres.data.data.name).toBe('自动化修改的用户');
    console.log('修改用户成功！');

    const getUserres = await getUser(originAdminlogindata);
    var target2 = getUserres.data.data.find((val) => val.name == '自动化修改的用户');
    expect(target2.name).toBe('自动化修改的用户');
    console.log('获取用户成功！');

    const updateAuthorizationres = await updateAuthorization(originAdminlogindata, roleid)
    expect(updateAuthorizationres.data.data._id).toBe(roleid);
    console.log('修改角色权限成功！');


    const logindatawithoutAuth = await login("autouserwithoutAuth", "123456");
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
})

test("学校初始管理员登录>>>获取登录用户信息>>>创建日程>>>修改日程>>>查询到该日程>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const originAdminlogindata = await login("chaoji", "123456");
    console.log('admin登录成功！');
    const userinfores = await userinfo(originAdminlogindata);
    var originAdminid = userinfores.data.data.user._id;
    console.log('获取登录用户信息成功！');
    const createScheduleres = await createSchedule(originAdminlogindata, originAdminid);
    expect(createScheduleres.data.data.title).toBe('自动化创建的日程');
    var scheduleid = createScheduleres.data.data._id;
    console.log('创建日程成功！');

    const updateScheduleres = await updateSchedule(originAdminlogindata, scheduleid, originAdminid);
    expect(updateScheduleres.data.data.title).toBe('自动化修改的日程');
    console.log('修改日程成功')

    const geteScheduleres = await geteSchedule(originAdminlogindata);
    var target = geteScheduleres.data.data.find((val) => val.title == '自动化修改的日程');
    expect(target.title).toBe('自动化修改的日程');
    console.log('获取日程成功！');


    const logindatawithoutAuth = await login("autouserwithoutAuth", "123456");
    const NoAuthuserres = await userinfo(logindatawithoutAuth);
    var NoAuthuserid = NoAuthuserres.data.data.user._id;

    try {
        await createSchedule(logindatawithoutAuth, NoAuthuserid)
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateSchedule(logindatawithoutAuth, scheduleid, originAdminid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await geteSchedule(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSchedule(logindatawithoutAuth, scheduleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }


})



test("失败登录>>>学校初始管理员登录>>>获取登录用户信息>>>上传我的资源>>>查询到该我的资源>>>上传校本资源>>>查询到该校本资源>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    try {
        await login("chaoji", "12332456");
    } catch (error) {
        expect(error.response.data.message).toBe("用户名或密码错误");
    }


    const originAdminlogindata = await login("chaoji", "123456");
    console.log('admin登录成功！');
    const userinfores = await userinfo(originAdminlogindata);
    var originAdminid = userinfores.data.data.user._id;
    console.log('获取登录用户信息成功！');

    const uploadmyresourcesres = await uploadmyresources(originAdminlogindata, originAdminid, '自动化创建的我的资源.docx');
    expect(uploadmyresourcesres.data.data.title).toBe('自动化创建的我的资源.docx');
    var myresourceid = uploadmyresourcesres.data.data._id;
    console.log('上传我的资源：上传成功！');


    const getmyresourcesres = await getmyresources(originAdminlogindata);
    var target1 = getmyresourcesres.data.data.find((val) => val.title == '自动化创建的我的资源.docx');
    expect(target1.title).toBe('自动化创建的我的资源.docx');
    console.log('获取角色成功！');

    const uploadschoolresourcesres = await uploadschoolresources(originAdminlogindata, originAdminid, '自动化创建的校本资源.docx');
    expect(uploadschoolresourcesres.data.data.title).toBe('自动化创建的校本资源.docx');
    schoolresourceid = uploadschoolresourcesres.data.data._id;
    console.log('上传我的资源：上传成功！');


    const getschoolresourcesres = await getschoolresources(originAdminlogindata);
    var target2 = getschoolresourcesres.data.data.find((val) => val.title == '自动化创建的校本资源.docx');
    expect(target2.title).toBe('自动化创建的校本资源.docx');
    console.log('获取角色成功！');


    const logindatawithoutAuth = await login("autouserwithoutAuth", "123456");

    try {
        await uploadmyresources(logindatawithoutAuth, originAdminid, '自动化创建的我的资源.docx')
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getmyresources(logindatawithoutAuth)
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }


    try {
        await uploadschoolresources(logindatawithoutAuth, originAdminid, '自动化创建的校本资源.docx')
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getschoolresources(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteMyresource(logindatawithoutAuth, myresourceid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSchoolresource(logindatawithoutAuth, schoolresourceid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
})


test("学校初始管理员登录>>>获取个人信息>>>获取科目信息>>>修改学校>>>\n新建班级>>>修改班级>>>查询到该班级>>>\n新建教师>>>修改教师>>>查询到该教师>>>\n新建学生>>>修改学生>>>查询到该学生>>>\n新建家长>>>修改家长>>>查询到该家长>>>\n发送消息>>>查询到该消息>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const originAdminlogindata = await login("chaoji", "123456");
    console.log('admin登录成功！');
    const userinfores = await userinfo(originAdminlogindata);
    var originAdminid = userinfores.data.data.user._id;
    var schoolid = userinfores.data.data.user.school._id;
    console.log('获取登录用户信息成功！');

    const subjectidArray = await getSubject(originAdminlogindata);
    console.log('获取科目id数组成功！');

    const subjectnameArray = await getSubjectname(originAdminlogindata);
    console.log('获取科目name数组成功！');

    const gradeidArray = await getgrade(originAdminlogindata);
    console.log('获取年级id数组成功！');


    const updateSchoolres = await updateSchool(originAdminlogindata, subjectidArray, schoolid);
    expect(updateSchoolres.data.result.data.brief).toBe('自动化修改的简介');
    console.log('修改学校信息成功');

    const createClassres = await createClass(originAdminlogindata, gradeidArray, '自动化新建的班级');
    expect(createClassres.data.data.name).toBe('自动化新建的班级');
    classid = createClassres.data.data._id;
    console.log('新建班级成功');

    //创建重复班级
    try {
        await createClass(originAdminlogindata, gradeidArray, '自动化创建的班级xxx');
    } catch (error) {
        console.log(error.response);
        expect(error.response.data.message).toBe("用户名已存在！");
    }


    const updateClassres = await updateClass(originAdminlogindata, gradeidArray, schoolid, classid);
    expect(updateClassres.data.data.name).toBe('自动化修改的班级');
    console.log('修改班级成功');


    const getClassres = await getClass(originAdminlogindata);
    var target1 = getClassres.data.data.find((val) => val.name == '自动化修改的班级');
    expect(target1.name).toBe('自动化修改的班级');
    var classidArray = [];
    var classnameArray = [];
    for (let i = 0; i < getClassres.data.data.length; i += 1) {
        classidArray.push(getClassres.data.data[i]._id)
    }
    for (let i = 0; i < getClassres.data.data.length; i += 1) {
        classnameArray.push(getClassres.data.data[i].name)
    }
    console.log('获取班级成功！');


    const createTeacherres = await createTeacher(originAdminlogindata, classid, classidArray, classnameArray, subjectidArray, subjectnameArray, subjectidArray);
    expect(createTeacherres.data.data.name).toBe('自动化创建的教师');
    teacherid = createTeacherres.data.data._id;
    console.log('新建教师成功');


    //创建重复老师
    try {
        await createTeacher(originAdminlogindata, classid, classidArray, classnameArray, subjectidArray, subjectnameArray);
    } catch (error) {
        expect(error.response.data.message).toBe("身份证号必须唯一！");
    }

    const updateTeacherres = await updateTeacher(originAdminlogindata, classid, classidArray, classnameArray, subjectidArray, subjectnameArray, teacherid);
    expect(updateTeacherres.data.data.name).toBe('自动化修改的教师');
    console.log('修改教师成功');


    const getTeacherres = await getTeacher(originAdminlogindata);
    var target2 = getTeacherres.data.data.find((val) => val.name == '自动化修改的教师');
    expect(target2.name).toBe('自动化修改的教师');
    console.log('获取该教师成功！');


    const createStudentres = await createStudent(originAdminlogindata, classid, classidArray, classnameArray, '自动化创建的学生');
    expect(createStudentres.data.data.name).toBe('自动化创建的学生');
    var studentid = createStudentres.data.data._id;
    console.log('新建学生成功');

    //创建重复学生
    try {
        await createStudent(originAdminlogindata, classid, classidArray, classnameArray, '自动化创建的学生3');
    } catch (error) {
        expect(error.response.data.message).toBe("身份证号必须唯一！");
    }

    const updateStudentres = await updateStudent(originAdminlogindata, classid, classidArray, classnameArray, studentid);
    expect(updateStudentres.data.data.name).toBe('自动化修改的学生');
    console.log('修改学生成功');


    const getStudentres = await getStudent(originAdminlogindata);
    var target3 = getStudentres.data.data.find((val) => val.name == '自动化修改的学生');
    expect(target3.name).toBe('自动化修改的学生');
    console.log('获取该学生成功！');

    const createParentres = await createParent(originAdminlogindata, studentid, '自动化创建的家长');
    expect(createParentres.data.data.name).toBe('自动化创建的家长');
    var parentid = createParentres.data.data._id;
    console.log('新建家长成功');

    //创建重复家长
    try {
        await createParent(originAdminlogindata, studentid, '自动化创建的家长23');
    } catch (error) {
        expect(error.response.data.message).toBe("用户名已存在！");
    }

    const updateParentres = await updateParent(originAdminlogindata, studentid, parentid);
    expect(updateParentres.data.data.name).toBe('自动化修改的家长');
    console.log('修改的家长成功!');

    const getParentres = await getParent(originAdminlogindata);
    var target4 = getParentres.data.data.find((val) => val.name == '自动化修改的家长');
    expect(target4.name).toBe('自动化修改的家长');
    console.log('获取该家长成功！');


    const getmessageRoleres = await getmessageRole(originAdminlogindata);
    var roleidArray = [];
    for (let i = 0; i < getmessageRoleres.data.data.length; i += 1) {
        roleidArray.push(getmessageRoleres.data.data[i]._id)
    }
    console.log('获取角色id数组成功');


    // const sendMessageres = await sendMessage(originAdminlogindata,classid,roleidArray);
    // console.log('发送消息：发送成功！');
    // expect(sendMessageres.data.data.title).toBe('自动化发送的消息标题');
    // expect(sendMessageres.data.data.message).toBe('自动化发送的短信内容');
    // expect(rsendMessagereses.data.data.news).toBe('<p>自动化发送的消息内容</p>↵');
    // console.log('发送获取成功！');


    // const getMessageres = await getMessage(originAdminlogindata);
    // var targetMessage = getMessageres.data.data.find((val) => val.title == '自动化发送的消息标题');
    // expect(targetMessage.title).toBe('自动化发送的消息标题');
    // console.log('获取消息：获取成功！');

    const teacherLogindata = await login("autoteacher", "123456789");
    console.log('teacher登录成功！');

    const createTimetableres = await createTimetable(teacherLogindata, classid, teacherid);
    expect(createTimetableres.data.data.title).toBe('化学');
    var timetableid = createTimetableres.data.data._id;
    console.log('创建课程成功！');

    //创建冲突课程
    try {
        await createTimetable(teacherLogindata, classid, teacherid);
    } catch (error) {
        expect(error.response.data.message).toBe("上课节数有冲突，请重新选择上课节数！");
    }

    const updateTimetableres = await updateTimetable(teacherLogindata, classid, timetableid);
    expect(updateTimetableres.data.data.address).toBe('自动化修改的上课地址');
    console.log('修改课表成功！');


    const getTimetableres = await getTimetable(teacherLogindata);
    var targetTimetable = getTimetableres.data.data.find((val) => val.address == '自动化修改的上课地址');
    expect(targetTimetable.address).toBe('自动化修改的上课地址');


    const logindatawithoutAuth = await login("autouserwithoutAuth", "123456");

    try {
        await updateSchool(logindatawithoutAuth, subjectidArray, schoolid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
    } catch (error) {
        await createClass(logindatawithoutAuth, gradeidArray, '自动化新建的班级');
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateClass(logindatawithoutAuth, gradeidArray, schoolid, classid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createTeacher(logindatawithoutAuth, classid, classidArray, classnameArray, subjectidArray, subjectnameArray, subjectidArray);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateTeacher(logindatawithoutAuth, classid, classidArray, classnameArray, subjectidArray, subjectnameArray, teacherid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getTeacher(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createStudent(logindatawithoutAuth, classid, classidArray, classnameArray, '自动化创建的学生');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateStudent(logindatawithoutAuth, classid, classidArray, classnameArray, studentid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getStudent(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createParent(logindatawithoutAuth, studentid, '自动化创建的家长');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }


    try {
        await updateParent(logindatawithoutAuth, studentid, parentid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getParent(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    // try {
    //     await sendMessage(logindatawithoutAuth,classid,roleidArray);
    // } catch (error) {
    //     expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    // }

    try {
        await getMessage(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await createTimetable(logindatawithoutAuth, classid, teacherid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateTimetable(logindatawithoutAuth, classid, timetableid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getTimetable(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSchedule(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteParent(logindatawithoutAuth, parentid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteStudent(logindatawithoutAuth, studentid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteTeacher(logindatawithoutAuth, teacherid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteClass(logindatawithoutAuth, classid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

})



test("学校初始管理员登录>>>获取个人信息>>>创建幻灯组>>>修改幻灯组>>>查询到该幻灯组>>>\n创建幻灯片>>>修改幻灯片>>>查询到该幻灯组片>>>\n创建学校功能集>>>修改学校功能集>>>查询到该功能集>>>创建学校栏目>>>修改学校栏目>>>查询到该栏目>>>\n创建文章>>>修改文章>>>查询到该文章>>>更新首页及公众号>>>登录无权限用户并执行以上操作(拒绝)", async () => {
    const originAdminlogindata = await login("chaoji", "123456");
    console.log('admin登录成功！');

    const userinfores = await userinfo(originAdminlogindata);
    var userid = userinfores.data.data.user._id;
    var schoolid = userinfores.data.data.user.school._id;
    console.log('获取登录用户信息成功！');

    const createSlidegroupres = await createSlidegroup(originAdminlogindata, '自动化创建的幻灯组');
    var slidegroupid = createSlidegroupres.data.data._id;
    expect(createSlidegroupres.data.data.name).toBe('自动化创建的幻灯组');
    console.log('新建幻灯组成功！');


    const updateSlidegroupres = await updateSlidegroup(originAdminlogindata, slidegroupid, schoolid);
    expect(updateSlidegroupres.data.data.name).toBe('自动化修改的幻灯组');
    console.log('修改幻灯组成功！');

    const getSlidegroupres = await getSlidegroup(originAdminlogindata);
    var target = getSlidegroupres.data.data.find((val) => val.name == '自动化修改的幻灯组');
    expect(target.name).toBe('自动化修改的幻灯组');

    const createSlideres = await createSlide(originAdminlogindata, slidegroupid, '自动化创建的幻灯片');
    var slideid = createSlideres.data.data._id;
    expect(createSlideres.data.data.title).toBe('自动化创建的幻灯片');
    console.log('新建幻灯片成功！');

    const updateSlideres = await updateSlide(originAdminlogindata, slidegroupid, slideid);
    expect(updateSlideres.data.data.title).toBe('自动化修改的幻灯片');
    console.log('修改幻灯组成功！');

    const getSlideres = await getSlide(originAdminlogindata, slidegroupid);
    var target2 = getSlideres.data.data.find((val) => val.title == '自动化修改的幻灯片');
    expect(target2.title).toBe('自动化修改的幻灯片');

    const createFeaturegroupres = await createFeaturegroup(originAdminlogindata, '自动化创建的功能集');
    var featuregroupid = createFeaturegroupres.data.data._id;
    expect(createFeaturegroupres.data.data.name).toBe('自动化创建的功能集');
    console.log('新建功能集成功！');

    const updateFeaturegroupres = await updateFeaturegroup(originAdminlogindata, schoolid, featuregroupid);
    expect(updateFeaturegroupres.data.data.name).toBe('自动化修改的功能集');
    console.log('修改功能集成功！');

    const getFeaturegroupres = await getFeaturegroup(originAdminlogindata);
    var target3 = getFeaturegroupres.data.data.find((val) => val.name == '自动化修改的功能集');
    expect(target3.name).toBe('自动化修改的功能集');

    const createPortalres = await createPortal(originAdminlogindata, slidegroupid, '自动化创建的栏目');
    var portalid = createPortalres.data.data._id;
    expect(createPortalres.data.data.name).toBe('自动化创建的栏目');
    console.log('新建栏目成功！');

    const updatePortalres = await updatePortal(originAdminlogindata, slidegroupid, schoolid, portalid);
    expect(updatePortalres.data.data.name).toBe('自动化修改的栏目');
    console.log('修改功栏目成功！');

    const getPortalres = await getPortal(originAdminlogindata);
    var target4 = getPortalres.data.data.find((val) => val.name == '自动化修改的栏目');
    expect(target4.name).toBe('自动化修改的栏目');

    const createArticalres = await createArtical(originAdminlogindata, portalid, '自动化创建的文章');
    var articleid = createArticalres.data.data._id;
    var articlelink = createArticalres.data.data.link;
    expect(createArticalres.data.data.title).toBe('自动化创建的文章');
    console.log('新建功能集成功！');

    const updateArticalres = await updateArtical(originAdminlogindata, articleid, schoolid, articlelink, portalid);
    expect(updateArticalres.data.data.title).toBe('自动化修改的文章');
    console.log('修改功能集成功！');

    const getArticalres = await getArtical(originAdminlogindata);
    var target5 = getArticalres.data.data.find((val) => val.title == '自动化修改的文章');
    expect(target5.title).toBe('自动化修改的文章');

    const updateOfficialres = await updateOfficial(originAdminlogindata, userid, slidegroupid, featuregroupid);
    expect(updateOfficialres.data.data.name).toBe('这是自动化配置的公众号');
    console.log('保存更新公众号详情&首页模板：保存成功');



    const logindatawithoutAuth = await login("autouserwithoutAuth", "123456");

    try {
        await createSlidegroup(logindatawithoutAuth, '自动化创建的幻灯组');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateSlidegroup(logindatawithoutAuth, slidegroupid, schoolid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getSlidegroup(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createSlide(logindatawithoutAuth, slidegroupid, '自动化创建的幻灯片');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await updateSlide(logindatawithoutAuth, slidegroupid, slideid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await getSlide(logindatawithoutAuth, slidegroupid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await createFeaturegroup(logindatawithoutAuth, '自动化创建的功能集');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await updateFeaturegroup(logindatawithoutAuth, schoolid, featuregroupid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }
    try {
        await getFeaturegroup(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createPortal(logindatawithoutAuth, slidegroupid, '自动化创建的栏目');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updatePortal(logindatawithoutAuth, slidegroupid, schoolid, portalid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getPortal(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await createArtical(logindatawithoutAuth, portalid, '自动化创建的文章');
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateArtical(logindatawithoutAuth, articleid, schoolid, articlelink, portalid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await getArtical(logindatawithoutAuth);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await updateOfficial(logindatawithoutAuth, userid, slidegroupid, featuregroupid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteArticle(logindatawithoutAuth, articleid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deletePortal(logindatawithoutAuth, portalid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteFeaturegroup(logindatawithoutAuth, featuregroupid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSlide(logindatawithoutAuth, slideid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    try {
        await deleteSlidegroup(logindatawithoutAuth, slidegroupid);
    } catch (error) {
        expect(error.response.data.message).toBe('您没有该权限，请登录相应的用户');
    }

    console.log('school.test.js总共执行了【'+timer+'】次测试用例');

})
