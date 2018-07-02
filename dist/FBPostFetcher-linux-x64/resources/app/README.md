# FB Post Fetcher
### Data Collector & Statistics Utility

This repository has been built using the Electron Framework with the following functionalities:
- View Facebook Posts of a Public Page along with the statistics.
- Download a compiled JSON file of any number of posts from a public FB page with numerous attributes like:
    * Posts
    * Comments
    * Likes,Shares,Comments
    * Page Fan Count, etc.
- Download any number of posts/comments in raw text format.

---
### Opening the application
The repository contains a folder named **dist**. Once you download the repository by clicking the Clone/Download button, open this folder. Select the next folder according to your platform:
- Darwin: For Mac users
- Win32: For windows users
- Linux: For Linux users
Once you select the correct folder, you should see the application executable **FBPostFetcher**. Open the application and it should launch correctly.

---
### Obtaining an Access Token
To use the software, one must have a User Access Token from Facebook that can be obtained using the following steps:
1. Open [https://developers.facebook.com/tools/explorer/](https://developers.facebook.com/tools/explorer/) and log into Facebook allowing the permissions required to enroll yourself as a FB developer.
![Graph Login Screen](https://www.dropbox.com/s/uzblr3gjm5a82az/fb_post_fetcher_graph_login.png?raw=1)
2. When the following window appears, click on Get Token -> Get User Access Token and select all permissions and finally click Get Access Token.
![Graph Main Window](https://www.dropbox.com/s/iqwacfz82c4w1he/fb_post_fetcher_graph.png?raw=1)
3. Copy the Access Token generated from the site, and paste it into the Access token field in the software. 
![Access Token Screen](https://www.dropbox.com/s/ij7j4x8voqcu235/fb_post_fetcher_main_screen.png?raw=1)
4. Finally, click on Continue with Access Token.
> NOTE: The Access Token will ususally expire in 24 hours, so make sure you generate a new one before using the software!

---
### Download compiled JSON file
The software can compile and download a JSON(JavaScript Object Notation) file containing the attributes selected. To do so:
1. Enter the Access Token
2. Enter the public FB page name.
3. Click on Download Posts
4. Select the desired attributes (hold Shift key to select multiple at once)
5. Click Continue
6. Enter the number of posts
7. Click Download JSON, the Software will prompt you to choose the Download path after completing the download.

---
### Convert JSON to Spreadsheet format
To convert the JSON downloaded JSON file into a readable csv format, copy the file contents and paste it into the following converter utility [JSON to CSV](https://json-csv.com/)
> NOTE: The utility supports a maximum file size of 1MB. To convert larger files, consider using another utility or purchasing the JSON CSV desktop application.

---
## Built With
> * Electron
> * HTML
> * CSS
> * JS
> * JQuery
> * Node.js
> * Bootstrap 3

---
### LICENSE
This repository is licensed under the MIT License - see the [LICENSE](https://github.com/jainsamyak/fb_post_fetcher/blob/master/LICENSE) file for details.