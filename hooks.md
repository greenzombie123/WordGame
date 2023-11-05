Users can attach pictures to words
Pictures are shown above words in the slide show
Pictures in the slideshow can be flipped repeatedly by click the slide
Can enabled pictures to either be revealed or hidden initially.
Can do word games with just pictures. 



PictureList 
{word:string, hasImage:boolean, src:string, id:number} array
setPictureList

Everytime a word is created, a new PictureList is created

PictureGameControls
```Javascript
useWord

interface word = {word:string, hasImage:boolean, file:File, id:number, hasWord:boolean}
interface words : word[] = [{word:'', hasImage:false, src:'', id:1},{word:'', hasImage:false, src:'', id:2}]
const initialWords = [{word:string, hasImage:boolean, src:string, id:number}]



export const useWords = (initialWords) => {
  const [words, wordsDispatch] = useReducer(wordsReducer, initialWords);

 const handleChangeWord = ({target:{value}}) => wordsDispatch({type:'changedWord', word:value, id:number})
 const handleDeleteWord = () => wordsDispatch({type:'deleted', id:number})
 const handleAddImage = ({target:{files}}) => wordsDispatch({type:'addedImage', file:files[0], id:number})
 

  return { words, handleChangeWord, handleDeleteWord, handleAddImage };
};




```

```Javascript

const TextInputGroup = ({words, onChange, onDeleteButtonClick, onAddButtonClick})=>(

   const handleMaxWords = ()=> //if at 9 words, dont render aa button
   

   return (
      <div className="textInputGroup">

       div > input > deleteButton
       div.buttonContainer > AddWord (handleMaxWords)
      </div>

      // Only render a deleteButton when there are 3 words
   )
)
const ImageManager = ({words, onChange}) => (
   return (
      div  
     h1
     ul
        li
           p -> word
           filepicker label -> NoImage / ImageAdded
   )
)

const MainMenu

const handleGoToSlideShow = ()=> {
   if a word is empty, 
      dont got to next slide
}

const handleEmptyWord = ()=> {
   if a word is empty,
      turn text red in input text
}

const isWordEmpty = ()=> {}


```
HTMLInputElement.files -> FileList object -> list of File objects

wordSlide
   flipcard
      flipcard_inner
         flipcard_front
            text
         flipcard_back
            img
  XXX pictureCard

const handleLoadedImages = ()=> {
   get all ref of img
   call revoke and pass their src prop
}

isImageFrontSide setIsImageFrontSide

![Alt text](image.png)

mount the comp but with no words in the top word display
choose a word to be displayed
rerender but fade in the word
when new word is chosen, still render previous word
fade out the word
replace with new word
fade in new word 

currentWord
isFadeIn
isFadeOut
isNextWord
newWord prop

[]
ue -> handleNewCurrentWord 
   -> handleFadeIn

dependency -> newWord
   if !isFadeIn
   ue -> handleFadeIn
      -> handleFadeOut
      <!-- -> handleNewWord -->

<!-- if isNewWord
   -> handleNewCurrentWord 
   -> handleFadeIn -->

da -> isFadeOut
   if isFadeOut
   ue -> handleNewCurrentWord 
      -> handleFadeIn
      -> handleFadeOut





