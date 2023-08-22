"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[68656],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,g=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?t.createElement(g,s(s({ref:n},u),{},{components:a})):t.createElement(g,s({ref:n},u))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14547:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={},l="Become Apache Release Manager",p={unversionedId:"contribution_guide/release",id:"contribution_guide/release",title:"Become Apache Release Manager",description:"Release managers shepherd a release from an initial community consensus to getting the compiled code package to final distribution, and may be involved in publicizing the release to the project's community and the ASF in general.",source:"@site/community/contribution_guide/release.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/release",permalink:"/community/contribution_guide/release",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/community/contribution_guide/release.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Become Apache SeaTunnel Committer",permalink:"/community/contribution_guide/committer"},next:{title:"Documentation Notice",permalink:"/community/submit_guide/document"}},u={},c=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Install Git",id:"install-git",level:3},{value:"Install GPG",id:"install-gpg",level:3},{value:"Install SHASUM",id:"install-shasum",level:3},{value:"SVN",id:"svn",level:3},{value:"MAVEN",id:"maven",level:3},{value:"Environment Configuration",id:"environment-configuration",level:2},{value:"Configure GPG KEY",id:"configure-gpg-key",level:3},{value:"Create the Key",id:"create-the-key",level:4},{value:"Verify Key",id:"verify-key",level:4},{value:"Upload the key to the public server",id:"upload-the-key-to-the-public-server",level:4},{value:"Verify that the key is uploaded properly",id:"verify-that-the-key-is-uploaded-properly",level:4},{value:"Configure maven",id:"configure-maven",level:3},{value:"Create a master password",id:"create-a-master-password",level:4},{value:"Configure the master password",id:"configure-the-master-password",level:4},{value:"Encrypt the Apache LDAP password",id:"encrypt-the-apache-ldap-password",level:4},{value:"Add new profile",id:"add-new-profile",level:4},{value:"Project version preparation",id:"project-version-preparation",level:2},{value:"Branch preparation",id:"branch-preparation",level:3},{value:"Update release-note",id:"update-release-note",level:3},{value:"Precompiled test",id:"precompiled-test",level:3},{value:"Compile",id:"compile",level:3},{value:"Submit source code",id:"submit-source-code",level:3},{value:"Deploy jar packages",id:"deploy-jar-packages",level:3},{value:"Upload to SVN",id:"upload-to-svn",level:2},{value:"Pull the release and dev repositories to the local",id:"pull-the-release-and-dev-repositories-to-the-local",level:3},{value:"Upload the key to the dev and release repositories",id:"upload-the-key-to-the-dev-and-release-repositories",level:3},{value:"Upload source code and binary packages to the dev repository",id:"upload-source-code-and-binary-packages-to-the-dev-repository",level:3},{value:"Copy source code and binary packages",id:"copy-source-code-and-binary-packages",level:4},{value:"Generate signature",id:"generate-signature",level:4},{value:"Generate GPG signature",id:"generate-gpg-signature",level:4},{value:"Check file signature",id:"check-file-signature",level:4},{value:"Check digital signatures",id:"check-digital-signatures",level:4},{value:"Commit",id:"commit",level:4},{value:"Vote by mail",id:"vote-by-mail",level:2},{value:"dev@seatunnel.apache.org Voting",id:"devseatunnelapacheorg-voting",level:3},{value:"Voting initiate",id:"voting-initiate",level:4},{value:"Voting close",id:"voting-close",level:4},{value:"general@incubator.apache.org Voting",id:"generalincubatorapacheorg-voting",level:3},{value:"Voting initiate",id:"voting-initiate-1",level:4},{value:"Voting close",id:"voting-close-1",level:4},{value:"Voting summary",id:"voting-summary",level:4},{value:"Official Release",id:"official-release",level:2},{value:"Moving files",id:"moving-files",level:3},{value:"Release Maven Repository",id:"release-maven-repository",level:3},{value:"Send notification email",id:"send-notification-email",level:3}],h={toc:c};function d(e){var n=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"become-apache-release-manager"},"Become Apache Release Manager"),(0,i.kt)("p",null,"Release managers shepherd a release from an initial community consensus to getting the compiled code package to final distribution, and may be involved in publicizing the release to the project's community and the ASF in general."),(0,i.kt)("p",null,"Tips: The Release Manager needs to have an Apache LDAP account, which means you need to become a Committer of the project before you can have an Apache LDAP account. All of the following words for ",(0,i.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," will serve as an example of a userId in the document, and the release manager needs to use their own userId."),(0,i.kt)("p",null,"An Apache release is a set of valid, signed, artifacts, voted on by the appropriate PMC and distributed on the official ASF release infrastructure."),(0,i.kt)("p",null,"For a release, you go through the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Has code that complies with the software licensing requirements"),(0,i.kt)("li",{parentName:"ul"},"Decides as a community to make a release, and designates a release manager"),(0,i.kt)("li",{parentName:"ul"},"The release manager prepares and signs the proposed release materials"),(0,i.kt)("li",{parentName:"ul"},"The PMC votes on whether to approve the release"),(0,i.kt)("li",{parentName:"ul"},"If the vote passes, the release manager copies the artifacts to the distribution infrastructure.")),(0,i.kt)("p",null,"The source code and build process must comply with the ASF legal and intellectual property requirements for a valid release, and the project must have the infrastructure in place to correctly sign the release artifacts."),(0,i.kt)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,i.kt)("p",null,"If this is the first time for a publisher to publish, you need to install the necessary environment, including the signature tool GnuPG and Maven repository certification-related preparations."),(0,i.kt)("h3",{id:"install-git"},"Install Git"),(0,i.kt)("p",null,"Use to clone project source code locally."),(0,i.kt)("h3",{id:"install-gpg"},"Install GPG"),(0,i.kt)("p",null,"Used to generate a digital signature, leaving a trail of every action you take. Apache's maven and SVN repositories both use GPG signatures to verify the validity of files."),(0,i.kt)("p",null,"Download GnuPG binary releases from ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"the official GnuPG website"),". "),(0,i.kt)("p",null,"Note: The commands of 1. x and 2. x versions of GnuPG are slightly different. The following description takes 2.2.28 as an example. After the installation, the GPG command is added to the system environment variable and is available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Check the version, which should be 2. x\ngpg --version \n")),(0,i.kt)("h3",{id:"install-shasum"},"Install SHASUM"),(0,i.kt)("p",null,"Used to generate signatures for files."),(0,i.kt)("h3",{id:"svn"},"SVN"),(0,i.kt)("p",null,"Used to pull the Apache Release SVN repository. Apache uses svn to host the release of the project."),(0,i.kt)("h3",{id:"maven"},"MAVEN"),(0,i.kt)("p",null,"Used to compile the project."),(0,i.kt)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,i.kt)("h3",{id:"configure-gpg-key"},"Configure GPG KEY"),(0,i.kt)("h4",{id:"create-the-key"},"Create the Key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --gen-key\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (3072) 4096 \nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 \nKey does not expire at all\nIs this correct? (y/N) y \n")),(0,i.kt)("p",null,"As shown above, the options are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1"),(0,i.kt)("li",{parentName:"ul"},"4096"),(0,i.kt)("li",{parentName:"ul"},"0"),(0,i.kt)("li",{parentName:"ul"},"y")),(0,i.kt)("p",null,"In the process of configuring GPG, the key types selected are RSA and RSA (default), so the first option is 1, and the desired key size can be directly input the corresponding value. The third option is 0, indicating that the validity period of the key is never expired. Finally, input y to ensure that the above input is correct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'You need a user ID to identify your key; the software constructs the user ID\nfrom the Real Name, Comment and Email Address in this form:\n    "Heinrich Heine (Der Dichter) <heinrichh@duesseldorf.de>"\n\nReal name: tyrantlucifer \nEmail address: tyrantlucifer@apache.org\nComment: The key of Apache SeaTunnel\nYou selected this USER-ID:\n    \u201ctyrantlucifer (The key of Apache SeaTunnel) <tyrantlucifer@apache.org>\u201d\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O \nYou need a password to protect your private key.\n')),(0,i.kt)("p",null,"As shown above, you will need to specify your personal information and encryption password for this key. You will need to fill in the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name"),(0,i.kt)("li",{parentName:"ul"},"Email (Apache Email)"),(0,i.kt)("li",{parentName:"ul"},"Comment for key"),(0,i.kt)("li",{parentName:"ul"},"Password (Very important, don't forget)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"We need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\ngpg: key 09****85 marked as ultimately trusted\npublic and secret key created and signed.\n\npub   4096R/0983DF85 2022-12-28\nkeys fingerprint = AE** FC** EC** 60** 72**  56** 05** AE** 09** DF**\nuid                  tyrantlucifer (The key of Apache SeaTunnel) <tyrantlucifer@apache.org>\nsub   4***R/B7****46 2022-12-28\n")),(0,i.kt)("p",null,"Note: gpg keys, which need to be remembered and used in subsequent releases."),(0,i.kt)("h4",{id:"verify-key"},"Verify Key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --list-keys\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/home/hadoop/.gnupg/pubring.gpg\n-------------------------------\npub   4096R/0983DF85 2022-12-28\nuid                  tyrantlucifer (The key of Apache SeaTunnel) <tyrantlucifer@apache.org>\nsub   4***R/B7****46 2022-12-28\n")),(0,i.kt)("p",null,"Tips: 0983DF85 is your public key abbreviation."),(0,i.kt)("h4",{id:"upload-the-key-to-the-public-server"},"Upload the key to the public server"),(0,i.kt)("p",null,"The public key is sent to the keyserver using the key id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ gpg --keyserver keyserver.ubuntu.com --send-key 0983DF85\n")),(0,i.kt)("p",null,"keyserver.ubuntu.com specifies the selected keyserver.\nThis is recommended because Apache Nexus uses this keyserver for verification."),(0,i.kt)("h4",{id:"verify-that-the-key-is-uploaded-properly"},"Verify that the key is uploaded properly"),(0,i.kt)("p",null,"You can use the following two methods to verify whether the key is uploaded properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Command line validation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --keyserver keyserver.ubuntu.com --search-keys 0983DF85\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Website verification\n",(0,i.kt)("a",{parentName:"li",href:"http://keyserver.ubuntu.com/"},"OpenPGP Keyserver (ubuntu.com)"),(0,i.kt)("img",{loading:"lazy",src:a(16287).Z,width:"1063",height:"476"}),(0,i.kt)("img",{loading:"lazy",src:a(83128).Z,width:"1102",height:"501"}),"\nTips: This screenshot is the key that has been uploaded before.\nIt is normal that the key generated in the previous step is inconsistent with that in the previous step.")),(0,i.kt)("h3",{id:"configure-maven"},"Configure maven"),(0,i.kt)("h4",{id:"create-a-master-password"},"Create a master password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn --encrypt-master-password <apache password>\n")),(0,i.kt)("h4",{id:"configure-the-master-password"},"Configure the master password"),(0,i.kt)("p",null,"Add the file ",(0,i.kt)("inlineCode",{parentName:"p"},"${user.home}/.m2/settings-security.xml")," to configure the password created in the previous step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<settingsSecurity>\n    <master>\x3c!-- Fill in the password printed in the previous step --\x3e</master>\n</settingsSecurity>\n")),(0,i.kt)("h4",{id:"encrypt-the-apache-ldap-password"},"Encrypt the Apache LDAP password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn --encrypt-password <apache password>\n")),(0,i.kt)("h4",{id:"add-new-profile"},"Add new profile"),(0,i.kt)("p",null,"Edit the configuration file of your local maven environment, the general path is ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.m2/setting.xml"),", and add the following xml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\n  <servers>\n    <server>\n      <id>apache.snapshots.https</id>\n      <username> \x3c!-- APACHE LDAP USERNAME --\x3e </username>\n      <password> \x3c!-- APACHE LDAP ENCRYPTED PASSWORD, Password encrypted in the previous step --\x3e </password>\n    </server>\n    <server>\n      <id>apache.releases.https</id>\n      <username> \x3c!-- APACHE LDAP USERNAME --\x3e </username>\n      <password> \x3c!-- APACHE LDAP ENCRYPTED PASSWORD, Password encrypted in the previous step --\x3e </password>\n    </server>\n    <server>\n        <id>gpg.passphrase</id>\n        <passphrase>\x3c!-- GPG KEY PASSWORD --\x3e</passphrase>\n    </server>\n  </servers>\n</settings>\n")),(0,i.kt)("h2",{id:"project-version-preparation"},"Project version preparation"),(0,i.kt)("h3",{id:"branch-preparation"},"Branch preparation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/seatunnel-release-prepare\ncd ~/seatunnel-release-prepare\ngit clone git@github.com:apache/incubator-seatunnel.git\ncd incubator-seatunnel\ngit checkout -b ${RELEASE.VERSION}-release\n")),(0,i.kt)("h3",{id:"update-release-note"},"Update release-note"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'vim release-note.md\ngit add release-note.md\ngit commit -m "[Release][${RELEASE.VERSION}][release-note] Add release-note"\ngit push\n')),(0,i.kt)("h3",{id:"precompiled-test"},"Precompiled test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DdryRun=true -Dusername=${GITHUB USERNAME}\n')),(0,i.kt)("h3",{id:"compile"},"Compile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn release:clean\nmvn release:prepare -Prelease -Darguments="-DskipTests" -DpushChanges=false -Dusername=${GITHUB USERNAME}\n')),(0,i.kt)("h3",{id:"submit-source-code"},"Submit source code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push\ngit push origin --tags\n")),(0,i.kt)("h3",{id:"deploy-jar-packages"},"Deploy jar packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upload jar packages")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn release:perform -Prelease -Darguments="-DskipTests" -Dusername=${GITHUB USERNAME}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Close the stage repository\n",(0,i.kt)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),(0,i.kt)("img",{loading:"lazy",src:a(19249).Z,width:"2920",height:"551"}))),(0,i.kt)("h2",{id:"upload-to-svn"},"Upload to SVN"),(0,i.kt)("h3",{id:"pull-the-release-and-dev-repositories-to-the-local"},"Pull the release and dev repositories to the local"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/seatunnel-release-prepare/dev\nmkdir -p ~/seatunnel-release-prepare/release\ncd ~/seatunnel-release-prepare/dev\nsvn --username=${APACHE LDAP username} co https://dist.apache.org/repos/dist/dev/incubator/seatunnel\ncd ~/seatunnel-release-prepare/release\nsvn --username=${APACHE LDAP username} co https://dist.apache.org/repos/dist/release/incubator/seatunnel\n")),(0,i.kt)("h3",{id:"upload-the-key-to-the-dev-and-release-repositories"},"Upload the key to the dev and release repositories"),(0,i.kt)("p",null,"Tips: Only the first Release Manager needs to do this step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/seatunnel-release-prepare/dev/seatunnel\ngpg -a --export ${GPG USERNAME} >> KEYS\nsvn add KEYS\nsvn --username=${APACHE LDAP USERNAME} commit -m "Add ${APACHE LDAP USERNAME} GPG key"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/seatunnel-release-prepare/release/seatunnel\ngpg -a --export ${GPG USERNAME} >> KEYS\nsvn add KEYS\nsvn --username=${APACHE LDAP USERNAME} commit -m "Add ${APACHE LDAP USERNAME} GPG key"\n')),(0,i.kt)("h3",{id:"upload-source-code-and-binary-packages-to-the-dev-repository"},"Upload source code and binary packages to the dev repository"),(0,i.kt)("h4",{id:"copy-source-code-and-binary-packages"},"Copy source code and binary packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/seatunnel-release-prepare/dev/seatunnel/${RELEASE.VERSION}\ncp -f ~/seatunnel-release-prepare/incubator-seatunnel/seatunnel-dist/target/*.tar.gz ~/seatunnel-release-prepare/dev/seatunnel/${RELEASE.VERSION}\ncd ~/seatunnel-release-prepare/dev/seatunnel/${RELEASE.VERSION}\n")),(0,i.kt)("h4",{id:"generate-signature"},"Generate signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -a 512 apache-seatunnel-incubating-${RELEASE.VERSION}-src.tar.gz >> apache-seatunnel-incubating-${RELEASE.VERSION}-src.tar.gz.sha512\nshasum -b -a 512 apache-seatunnel-incubating-${RELEASE.VERSION}-bin.tar.gz >> apache-seatunnel-incubating-${RELEASE.VERSION}-bin.tar.gz.sha512\n")),(0,i.kt)("h4",{id:"generate-gpg-signature"},"Generate GPG signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --armor --detach-sig apache-seatunnel-incubating-${RELEASE.VERSION}-src.tar.gz\ngpg --armor --detach-sig apache-seatunnel-incubating-${RELEASE.VERSION}-bin.tar.gz\n")),(0,i.kt)("h4",{id:"check-file-signature"},"Check file signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -c apache-seatunnel-incubating-${RELEASE.VERSION}-src.tar.gz.sha512\nshasum -c apache-seatunnel-incubating-${RELEASE.VERSION}-bin.tar.gz.sha512\n")),(0,i.kt)("h4",{id:"check-digital-signatures"},"Check digital signatures"),(0,i.kt)("p",null,"step1: Import (Release Manager does not need to do this step)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://dist.apache.org/repos/dist/dev/incubator/seatunnel/KEYS >> KEYS\ngpg --import KEYS\ngpg --edit-key \"${GPG username of releaser}\"\n  > trust\n\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5\n\n  > save\n")),(0,i.kt)("p",null,"step2: Check the gpg digital signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify apache-seatunnel-incubating-${RELEASE.VERSION}-src.tar.gz.asc apache-seatunnel-incubating-${RELEASE.VERSION}-src.tar.gz\ngpg --verify apache-seatunnel-incubating-${RELEASE.VERSION}-seatunnel-bin.tar.gz.asc apache-seatunnel-incubating-${RELEASE.VERSION}-seatunnel-bin.tar.gz\n")),(0,i.kt)("h4",{id:"commit"},"Commit"),(0,i.kt)("p",null,"Commit all files to the dev repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'svn add *\nsvn --username=${APACHE LDAP USERNAME} commit -m "release ${RELEASE.VERSION}"\n')),(0,i.kt)("h2",{id:"vote-by-mail"},"Vote by mail"),(0,i.kt)("h3",{id:"devseatunnelapacheorg-voting"},(0,i.kt)("a",{parentName:"h3",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")," Voting"),(0,i.kt)("h4",{id:"voting-initiate"},"Voting initiate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[VOTE] Release Apache SeaTunnel(Incubating) 2.3.0\n\nHello SeaTunnel Community,\n\nThis is a call for vote to release Apache SeaTunnel (Incubating) version 2.3.0\n\nRelease notes:\nhttps://github.com/apache/incubator-seatunnel/blob/2.3.0/release-note.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/seatunnel/2.3.0 \n\nGit tag for the release:\nhttps://github.com/apache/incubator-seatunnel/tree/2.3.0\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapacheseatunnel-1015/org/apache/seatunnel/\n\nRelease Commit ID:\nhttps://github.com/apache/incubator-seatunnel/commit/d7280abbe9e72262640836182a7f090a5706988a\n\nKeys to verify the Release Candidate: \nhttps://downloads.apache.org/incubator/seatunnel/KEYS\n \nThe vote will be open for at least 72 hours or until necessary numbers of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n\n[ ] +0 no opinion\n\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code artifacts have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each SeaTunnel repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n\nMore detail checklist please refer:\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\n\n--\n\nBest Regards\nChao Tian\n")),(0,i.kt)("h4",{id:"voting-close"},"Voting close"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[VOTE] Release Apache SeaTunnel(Incubating) 2.3.0\n\nHi SeaTunnel Community,\n\nThanks, everyone, I will close this vote thread and the results will be tallied.\n\nBest wishes!\nChao Tian\n#### \u5f52\u7968\n[RESULT] [VOTE] Release Apache SeaTunnel(Incubating) 2.3.0\n\nHi SeaTunnel community,\n\nThis vote now closes since 72 hours have passed.\n\nThe vote PASSES with\n\n3 (+1 binding) votes from the IPMC,\nDavid,\nGuo Wei,\nCalvin Kirs  \n\n6 (+1 non-binding) votes from the developer from the community\n\nJun Gao, \nTaoZex, \nhailin0,\nPeng Yuan,\nZongwen Li,\nGuangdong Liu\nand no further 0 or -1 votes.\n\n\nThe vote thread: \n\nhttps://lists.apache.org/thread/98oc6q6vghlg8qpfyf5yttzy925tfp9g \n\n\nThanks for your participation, I will now bring the vote to\n[general@incubator.apache.org](mailto:general@incubator.apache.org) <mailto:\n[general@incubator.apache.org](mailto:general@incubator.apache.org)> to get\napproval by the IPMC.\nIf this vote passes also, the release is accepted and will be published.\n\nBest wishes,\nChao Tian\n")),(0,i.kt)("h3",{id:"generalincubatorapacheorg-voting"},(0,i.kt)("a",{parentName:"h3",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," Voting"),(0,i.kt)("h4",{id:"voting-initiate-1"},"Voting initiate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bashing"},"[VOTE] Release Apache SeaTunnel(Incubating) 2.3.0\n\nHello IPMC, This is an official vote for the Apache\nSeaTunnel(Incubating) 2.3.0  that we have been working toward.\n\nTo learn more about Apache SeaTunnel(Incubating), please see:\n\nhttps://seatunnel.apache.org\n\nThe Apache SeaTunnel (incubating) community has voted and approved the release.\n\nVote thread:\n\nhttps://lists.apache.org/thread/98oc6q6vghlg8qpfyf5yttzy925tfp9g\n\nResult thread:\n\nhttps://lists.apache.org/thread/6c0463dsoh8r0gmvqo67lttgy4o40xst\n\nRelease changes:\n\nhttps://github.com/apache/incubator-seatunnel/blob/2.3.0/release-note.md\n\nThe release candidates:\n\nhttps://dist.apache.org/repos/dist/dev/incubator/seatunnel/2.3.0\n\nMaven 2 staging repository:\n\nhttps://repository.apache.org/content/repositories/orgapacheseatunnel-1015/org/apache/seatunnel/\n\nGit tag for the release:\n\nhttps://github.com/apache/incubator-seatunnel/tree/2.3.0\n\nRelease Commit ID:\n\nhttps://github.com/apache/incubator-seatunnel/commit/d7280abbe9e72262640836182a7f090a5706988a\n\nKeys to verify the Release Candidate:\n\nhttps://downloads.apache.org/incubator/seatunnel/KEYS\n\nGPG user ID:\n\ntyrantlucifer\n\nThe vote will be open for at least 72 hours or until necessary numbers\nof votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and PGP signatures are valid.\n[ ] DISCLAIMER is included.\n[ ] Source code artifacts have correct names matching the current release.\n[ ] LICENSE and NOTICE files are correct for each SeaTunnel repo.\n[ ] All files have license headers if necessary.\n[ ] No compiled archives bundled in source archive.\n\nMore detail checklist please refer:\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\nThe following votes are carried over from the SeaTunnel dev mailing list:\n\n+1(binding)\nDavid,\nWilliam-Guowei,\nCalvin Kirs\n\nBest Regards,\nChao Tian\n")),(0,i.kt)("h4",{id:"voting-close-1"},"Voting close"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[VOTE] Release Apache SeaTunnel(Incubating) 2.3.0\n\nHi IPMC,\n\nThanks, everyone, I will close this vote thread and the results will be tallied.\n\nBest wishes!\nChao Tian\n")),(0,i.kt)("h4",{id:"voting-summary"},"Voting summary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[RESULT] [VOTE] Release Apache SeaTunnel(Incubating) 2.3.0\n\nHi SeaTunnel community,\n\nThis vote now closes since 72 hours have passed.\n\nThe vote PASSES with\n\n3 (+1 binding) votes from the IPMC,\nDavid,\nGuo Wei,\nCalvin Kirs  \n\n6 (+1 non-binding) votes from the developer from the community\n\nJun Gao, \nTaoZex, \nhailin0,\nPeng Yuan,\nZongwen Li,\nGuangdong Liu\nand no further 0 or -1 votes.\n\n\nThe vote thread: \n\nhttps://lists.apache.org/thread/98oc6q6vghlg8qpfyf5yttzy925tfp9g \n\n\nThanks for your participation, I will now bring the vote to\n[general@incubator.apache.org](mailto:general@incubator.apache.org) <mailto:\n[general@incubator.apache.org](mailto:general@incubator.apache.org)> to get\napproval by the IPMC.\nIf this vote passes also, the release is accepted and will be published.\n\nBest wishes,\nChao Tian\n")),(0,i.kt)("h2",{id:"official-release"},"Official Release"),(0,i.kt)("h3",{id:"moving-files"},"Moving files"),(0,i.kt)("p",null,"Moving files from the dev repository to the release repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"svn mv https://dist.apache.org/repos/dist/dev/incubator/seatunnel/${RELEASE.VERSION} https://dist.apache.org/repos/dist/release/incubator/seatunnel/\n")),(0,i.kt)("h3",{id:"release-maven-repository"},"Release Maven Repository"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(82449).Z,width:"2820",height:"576"})),(0,i.kt)("h3",{id:"send-notification-email"},"Send notification email"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"dev@seatunnel.apache.org"},"dev@seatunnel.apache.org"),"\n",(0,i.kt)("a",{parentName:"p",href:"dev@seatunnel.apache.org"},"general@incubator.apache.org")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Hi all,\n\nWe are glad to announce the release of Apache SeaTunnel(incubating) ${RELEASE.VERSION}.\n\nOnce again I would like to express my thanks to your help.\n\nSeaTunnel: SeaTunnel(Incubating) is a distributed, high-performance data integration platform for the synchronization and transformation of massive\ndata (offline & real-time).\n\nApache SeaTunnel(Incubating) website: \n\nhttp://seatunnel.apache.org/\n\nDownloads: \n\nhttps://seatunnel.apache.org/download/\n\nRelease Notes:\n\nhttps://github.com/apache/incubator-seatunnel/blob/${RELEASE.VERSION}/release-note.md\n\nDocuments: \n\nhttps://seatunnel.apache.org/docs/${RELEASE.VERSION}/intro/about\n\nTwitter: \n\nhttps://twitter.com/ASFSeaTunnel\n\nSeaTunnel(Incubating) Resources:\n- GitHub: https://github.com/apache/incubator-seatunnel\n- Issue: https://github.com/apache/incubator-seatunnel/issues\n- Mailing list: dev@seatunnel.apache.org\n\n- Apache SeaTunnel(Incubating) Team\n")))}d.isMDXComponent=!0},16287:function(e,n,a){n.Z=a.p+"assets/images/20221228223258-342b2060bf5edc66afd0e90752fe621f.png"},83128:function(e,n,a){n.Z=a.p+"assets/images/20221228223313-e3f46e6926c683c961a5280b30ae7ae0.png"},19249:function(e,n,a){n.Z=a.p+"assets/images/20221228225445-29ee9184ea2d8bf600dda40b95c49ed8.png"},82449:function(e,n,a){n.Z=a.p+"assets/images/20221228232210-508912952311e605f877f38ea3c4d309.png"}}]);