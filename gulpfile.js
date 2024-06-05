// Importar o pacote do Gulp
const gulp = require('gulp');
// Importa o pacote do Gulp com o SASS e o próprio SASS
const sass = require('gulp-sass')(require('sass'));
// Importa o Plugin de mapeamento do arquivo fonte. O Mapeamento faz com que o navegador entenda exatamente onde estão cada linha de código no arquivo fonte, facilitando a edição de código pelo dev tools (F12).
const sourcemaps = require('gulp-sourcemaps');
// Importa o Plugin uglify que comprime/minifica o JS
const uglify = require('gulp-uglify');
// Plugin de Obfuscação = Tornar o seu código ilegível por segurança (JavaScript)
const obfuscate = require('gulp-obfuscate')
// Plugin de Comprimir imagens
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
     // Seleciona todos os arquivos de imagens
     return gulp.src('./source/images/*')
          // Faz a função do Plugin
          .pipe(imagemin())
          // Pasta de Destino das Imagens já Comprimidas
          .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
     // Seleciona todos os arquivos JS
     return gulp.src('./source/scripts/*.js')
          // Executa o Uglify
          .pipe(uglify())
          // Executa a obfuscação
          .pipe(obfuscate())
          // Define a pasta de destino 
          .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
     // * Seleciona todos os arquivos scss dentro do source
     return gulp.src('./source/styles/main.scss')
          // Inicia o mapeamento
          .pipe(sourcemaps.init())
          // Compila o Sass
          .pipe(sass({
               // Minifica o arquivo, ocupando menos espaço de memória
               outputStyle: 'compressed'
          }))
          // Cria o arquivo de mapeamento
          // Dentro dos parâmetros recebe a pasta onde os mapas estarão disponíveis (a localização deles)
          .pipe(sourcemaps.write('./maps'))
          // Define o destino para a pasta build
          .pipe(gulp.dest('./build/styles'))
}

exports.default = function () {
     gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
     gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
     gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}

