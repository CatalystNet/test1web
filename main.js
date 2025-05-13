// Main JavaScript file for SOLIDE landing page clone
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any components that need JavaScript functionality
  console.log('SOLIDE landing page loaded');
  
  // Create a basic React-like structure for the root element
  const root = document.getElementById('root');
  
  // Create the main content
  root.innerHTML = `
    <div class="min-h-screen bg-gray-950 text-white overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 z-0">
        <div class="absolute top-0 left-0 right-0 h-[1000px] w-[1000px] bg-pink-500/5 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-[1000px] w-[1000px] bg-pink-500/10 blur-3xl"></div>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,20,147,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,20,147,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      </div>

      <!-- Navigation -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-pink-500/10">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div class="flex items-center">
            <img src="./assets/logo.png" alt="SOLIDE Logo" class="h-8 w-8 mr-3">
            <span class="text-xl font-bold text-pink-400">SOLIDE</span>
          </div>
          <div class="flex items-center space-x-4">
            <a href="https://docs.solide.cc" target="_blank" class="text-gray-300 hover:text-pink-400 transition-colors">Docs</a>
            <a href="https://github.com/solide-project" target="_blank" class="text-gray-300 hover:text-pink-400 transition-colors">GitHub</a>
            <a href="https://twitter.com/solideproject" target="_blank" class="text-gray-300 hover:text-pink-400 transition-colors">Twitter</a>
            <a href="https://solide.cc" class="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-md hover:from-pink-400 hover:to-rose-400 transition-all">Launch App</a>
          </div>
        </div>
      </nav>
      
      <!-- Hero Section -->
      <div class="relative pt-[20vh] pb-12 px-4 z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-6 relative">
            <div class="absolute -top-4 -left-2 w-24 h-24 bg-pink-500/30 rounded-full blur-xl animate-pulse-slow"></div>
            <div class="absolute -right-4 top-2 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
            <h1 class="text-4xl lg:text-7xl font-bold mb-2 relative z-10">
              <span class="bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text">The Most Advanced</span>
              <br>Solana Development Environment
            </h1>
          </div>
          <p class="text-xl mb-8 text-gray-300">Write, compile, and deploy Solana smart contracts seamlessly in your browser.</p>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://solide.cc" class="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 rounded-lg font-medium hover:from-pink-400 hover:to-rose-400 transition-all shadow-lg">Launch App</a>
            <a href="https://docs.solide.cc" class="border border-pink-500/20 hover:border-pink-500/50 px-6 py-3 rounded-lg font-medium transition-colors hover:bg-pink-500/10">Read Docs</a>
          </div>
        </div>
      </div>

      <!-- Code Editor Preview -->
      <div class="relative z-10 max-w-6xl mx-auto px-4 mb-20">
        <div class="relative rounded-xl overflow-hidden border border-pink-500/20 shadow-2xl">
          <div class="bg-black/90 p-3 border-b border-pink-500/20 flex items-center">
            <div class="flex space-x-2 mr-4">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="flex-1 text-center text-sm text-gray-400">main.rs - SOLIDE</div>
          </div>
          <div class="bg-gray-950 p-4 font-code text-sm overflow-x-auto">
            <pre class="text-gray-300"><span class="text-pink-400">use</span> <span class="text-blue-400">solana_program</span>::{
    <span class="text-blue-400">account_info</span>::{<span class="text-blue-400">next_account_info</span>, <span class="text-blue-400">AccountInfo</span>},
    <span class="text-blue-400">entrypoint</span>,
    <span class="text-blue-400">entrypoint</span>::<span class="text-blue-400">ProgramResult</span>,
    <span class="text-blue-400">msg</span>,
    <span class="text-blue-400">program_error</span>::<span class="text-blue-400">ProgramError</span>,
    <span class="text-blue-400">pubkey</span>::<span class="text-blue-400">Pubkey</span>,
};

<span class="text-pink-400">entrypoint!</span>(<span class="text-yellow-400">process_instruction</span>);

<span class="text-pink-400">pub fn</span> <span class="text-yellow-400">process_instruction</span>(
    program_id: &<span class="text-blue-400">Pubkey</span>,
    accounts: &[<span class="text-blue-400">AccountInfo</span>],
    instruction_data: &[<span class="text-blue-400">u8</span>],
) -> <span class="text-blue-400">ProgramResult</span> {
    <span class="text-pink-400">let</span> accounts_iter = &<span class="text-pink-400">mut</span> accounts.<span class="text-yellow-400">iter</span>();
    <span class="text-pink-400">let</span> account = <span class="text-blue-400">next_account_info</span>(accounts_iter)?;

    <span class="text-green-400">// Ensure the account is owned by the program</span>
    <span class="text-pink-400">if</span> account.<span class="text-yellow-400">owner</span> != program_id {
        <span class="text-pink-400">return</span> <span class="text-blue-400">Err</span>(<span class="text-blue-400">ProgramError</span>::<span class="text-blue-400">IncorrectProgramId</span>);
    }

    <span class="text-blue-400">msg!</span>(<span class="text-green-400">"Hello, Solana!"</span>);
    <span class="text-blue-400">Ok</span>(())
}</pre>
          </div>
        </div>
      </div>
      
      <!-- Features Section -->
      <div id="features" class="relative z-10 py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-black/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 group transition-all backdrop-blur-sm">
              <div class="h-12 w-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-pink-400">Browser-Based IDE</h3>
              <p class="text-gray-300">Code directly in your browser with syntax highlighting, auto-completion, and error checking.</p>
            </div>
            <div class="bg-black/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 group transition-all backdrop-blur-sm">
              <div class="h-12 w-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-pink-400">One-Click Deployment</h3>
              <p class="text-gray-300">Deploy your Solana programs with a single click, no complex setup required.</p>
            </div>
            <div class="bg-black/30 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 group transition-all backdrop-blur-sm">
              <div class="h-12 w-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-pink-400">Secure Environment</h3>
              <p class="text-gray-300">Built with security in mind, keeping your code and keys safe.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Templates Section -->
      <div class="relative z-10 py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-center">Ready-to-Use Templates</h2>
          <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Get started quickly with our pre-built templates for common Solana use cases.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Template 1 -->
            <div class="bg-black/60 rounded-lg overflow-hidden border border-pink-500/20 group hover:border-pink-500/30 transition-all">
              <div class="p-4 border-b border-pink-500/10">
                <h3 class="font-semibold text-pink-400">Token Program</h3>
              </div>
              <div class="p-4">
                <p class="text-sm text-gray-300 mb-4">Create your own SPL token with customizable features.</p>
                <div class="flex justify-between items-center">
                  <span class="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded">Beginner</span>
                  <button class="text-sm text-pink-400 hover:text-pink-300 transition-colors">Use Template →</button>
                </div>
              </div>
            </div>
            
            <!-- Template 2 -->
            <div class="bg-black/60 rounded-lg overflow-hidden border border-pink-500/20 group hover:border-pink-500/30 transition-all">
              <div class="p-4 border-b border-pink-500/10">
                <h3 class="font-semibold text-pink-400">NFT Marketplace</h3>
              </div>
              <div class="p-4">
                <p class="text-sm text-gray-300 mb-4">Build a marketplace for buying and selling NFTs.</p>
                <div class="flex justify-between items-center">
                  <span class="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded">Intermediate</span>
                  <button class="text-sm text-pink-400 hover:text-pink-300 transition-colors">Use Template →</button>
                </div>
              </div>
            </div>
            
            <!-- Template 3 -->
            <div class="bg-black/60 rounded-lg overflow-hidden border border-pink-500/20 group hover:border-pink-500/30 transition-all">
              <div class="p-4 border-b border-pink-500/10">
                <h3 class="font-semibold text-pink-400">DAO Governance</h3>
              </div>
              <div class="p-4">
                <p class="text-sm text-gray-300 mb-4">Create a decentralized autonomous organization.</p>
                <div class="flex justify-between items-center">
                  <span class="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded">Advanced</span>
                  <button class="text-sm text-pink-400 hover:text-pink-300 transition-colors">Use Template →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Workflow Section -->
      <div class="relative z-10 py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">Streamlined Workflow</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center text-center">
              <div class="h-16 w-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6 relative">
                <span class="text-2xl font-bold text-pink-400">1</span>
                <div class="absolute inset-0 bg-pink-500/20 rounded-full animate-pulse opacity-50"></div>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-pink-400">Write Code</h3>
              <p class="text-gray-300">Create your Solana program using our feature-rich code editor with syntax highlighting and auto-completion.</p>
            </div>
            
            <div class="flex flex-col items-center text-center">
              <div class="h-16 w-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6 relative">
                <span class="text-2xl font-bold text-pink-400">2</span>
                <div class="absolute inset-0 bg-pink-500/20 rounded-full animate-pulse opacity-50"></div>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-pink-400">Compile & Test</h3>
              <p class="text-gray-300">Compile your code and test it directly in the browser with our integrated testing framework.</p>
            </div>
            
            <div class="flex flex-col items-center text-center">
              <div class="h-16 w-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6 relative">
                <span class="text-2xl font-bold text-pink-400">3</span>
                <div class="absolute inset-0 bg-pink-500/20 rounded-full animate-pulse opacity-50"></div>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-pink-400">Deploy</h3>
              <p class="text-gray-300">Deploy your program to Solana devnet or mainnet with a single click and monitor its performance.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="relative z-10 py-20 px-4 bg-gradient-to-b from-pink-500/20 to-purple-500/20">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to Start Building?</h2>
          <p class="text-xl mb-8 text-gray-300">Join thousands of developers already using SOLIDE to build on Solana.</p>
          <a href="https://solide.cc" class="bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 rounded-lg font-medium text-lg hover:from-pink-400 hover:to-rose-400 transition-all shadow-lg">Launch SOLIDE</a>
        </div>
      </div>
      
      <!-- Footer -->
      <footer class="relative z-10 bg-black/80 py-12 px-4 border-t border-pink-500/10">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <div class="flex items-center mb-6 sm:mb-0">
              <img src="./assets/logo.png" alt="SOLIDE Logo" class="h-8 w-8 mr-3">
              <span class="text-xl font-bold text-pink-400">SOLIDE</span>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <a href="https://docs.solide.cc" class="text-gray-400 hover:text-pink-400 transition-colors">Docs</a>
              <a href="https://github.com/solide-project" class="text-gray-400 hover:text-pink-400 transition-colors">GitHub</a>
              <a href="https://twitter.com/solideproject" class="text-gray-400 hover:text-pink-400 transition-colors">Twitter</a>
              <a href="https://discord.gg/solide" class="text-gray-400 hover:text-pink-400 transition-colors">Discord</a>
              <a href="mailto:contact@solide.cc" class="text-gray-400 hover:text-pink-400 transition-colors">Contact</a>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 SOLIDE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `;
});